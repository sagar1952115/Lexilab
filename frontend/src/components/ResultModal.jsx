import { Link } from "react-router-dom";
const ResultModal = ({
  resultMessage,
  maxScore,
  lang,
  id,
  level,
  correct,
  incorrect,
  unattempted,
  score,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div className="p-8 bg-white rounded-lg shadow-lg">
        <h2 className="mb-4 text-4xl font-bold text-center">Score</h2>
        <p
          className={`mb-4 text-2xl text-center ${
            score === 5 ? "text-green" : "text-orange"
          }`}
        >
          {resultMessage}
        </p>
        <p className="mb-4 text-4xl font-extrabold text-center text-blue">
          {score}/{maxScore}
        </p>
        <div className="flex justify-between w-2/4 m-auto text-center">
          <span className="w-2/3 font-extrabold text-green ">Correct</span>
          <span>:</span>
          <span>{correct}</span>
        </div>
        <div className="flex justify-between w-2/4 m-auto text-center">
          <span className="w-2/3 font-extrabold text-orange">Incorrect</span>
          <span>:</span>
          <span>{incorrect}</span>
        </div>
        <div className="flex justify-between w-2/4 m-auto text-center">
          <span className="w-2/3 font-extrabold text-gray">Unattempted</span>
          <span>:</span>
          <span>{unattempted}</span>
        </div>
        <div className="px-4 py-1 mx-auto mt-4 text-lg font-extrabold text-white rounded-lg bg-blue w-max">
          <Link
            to={`/lang/${id}?level=${level}`}
            state={{
              name: lang,
              id,
              level,
            }}
          >
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};
export default ResultModal;
