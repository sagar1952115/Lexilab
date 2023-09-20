import React, { useState } from "react";
import ResultModal from "../components/ResultModal";
import axios from "axios";

const TestPage = ({ questions, lang, id, level }) => {
  const [resultMessage, setResultMessage] = useState("");
  const [score, setScore] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [incorrect, setIncorrect] = useState(0);
  const [maxScore, setMaxScore] = useState();
  const [unattempted, setUnattempted] = useState(0);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState(
    Array(questions.length).fill("")
  );
  const [showExitModal, setShowExitModal] = useState(false);

  const [showResult, setShowResult] = useState(false);
  const handleOptionSelect = (questionIndex, option) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[questionIndex] = option;
    setUserAnswers(updatedUserAnswers);
  };
  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const isLastQuestion = currentQuestionIndex === questions.length - 1;
  const isFirstQuestion = currentQuestionIndex === 0;
  const user = localStorage.getItem("user");
  const user_id = JSON.parse(user).data._id;

  const handleSubmit = async () => {
    try {
      const res = await axios.post("/api/test/result", {
        questionArr: questions,
        answerArr: userAnswers,
        user_id,
      });
      setCorrect(res.data.correct);
      setIncorrect(res.data.incorrect);
      setUnattempted(res.data.unattempted);
      setScore(res.data.score);
      setMaxScore(res.data.max_score);
      if (res.data.correct === 5) {
        setResultMessage("You've done exceptionally well. Keep it up !!!");
      } else if (res.data.correct >= 3 && res.data.correct < 5) {
        setResultMessage("Good job!!!. You have done well");
      } else {
        setResultMessage("Ahh!!! you need to work hard");
      }
      setShowResult(true);
    } catch (err) {
      console.log(err);
    }
  };
  const handleCancel = () => {
    setShowExitModal(false);
  };

  return (
    <div className="container p-4 mx-auto lg:w-1/3">
      {/* {loading && <div>Loading...</div>} */}
      <div className="p-4 mt-5 mb-4 shadow ">
        <div className="flex justify-between mb-2 text-xl font-bold text-blue">
          <div>{questions[currentQuestionIndex].desc}</div>
          <div className="text-lg text-gray">
            Point:{questions[currentQuestionIndex].point}
          </div>
        </div>
        {questions[currentQuestionIndex].options.map((option, optionIndex) => (
          <div key={optionIndex} className="flex items-center mb-2">
            <input
              type="radio"
              className="mr-2"
              name={`question${currentQuestionIndex}`}
              value={option}
              checked={userAnswers[currentQuestionIndex] === option}
              onChange={() => handleOptionSelect(currentQuestionIndex, option)}
            />
            <label>{option}</label>
          </div>
        ))}
      </div>

      <div className="flex justify-between">
        <button
          className="px-4 py-2 font-bold text-white rounded bg-gray hover:bg-gray-400"
          onClick={handlePreviousQuestion}
          disabled={isFirstQuestion}
        >
          Previous
        </button>
        <button
          className="px-4 py-2 font-bold text-white rounded bg-blue hover:bg-blue-700"
          onClick={isLastQuestion ? handleSubmit : handleNextQuestion}
        >
          {isLastQuestion ? "Submit" : "Next"}
        </button>
      </div>

      {showResult && (
        <ResultModal
          id={id}
          maxScore={maxScore}
          lang={lang}
          level={level}
          score={score}
          correct={correct}
          incorrect={incorrect}
          unattempted={unattempted}
          resultMessage={resultMessage}
          totalQuestions={questions.length}
        />
      )}

      {showExitModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-lg">
          <div className="p-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-xl font-bold">Exit Confirmation</h2>
            <p>Are you sure you want to leave this page?</p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 mr-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                onClick={handleSubmit}
              >
                Submit
              </button>
              <button
                className="px-4 py-2 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400"
                onClick={handleCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TestPage;
