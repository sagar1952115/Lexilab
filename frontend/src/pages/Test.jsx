import React, { useState, useEffect } from "react";
import TestPage from "./TestPage";
import axios from "axios";

import { useLocation } from "react-router-dom";

const Test = () => {
  const { state } = useLocation();
  const [loading, setLoading] = useState(false);

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    if (questions.length === 0) {
      fetchQuestion();
    }
    // eslint-disable-next-line
  }, [questions]);
  const fetchQuestion = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        `https://lexilab.onrender.com/api/question?lang_id=${
          state.id
        }&category=${state.topic.toLowerCase()}`
      );
      setQuestions(res.data.lang);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };
  return (
    <div>
      {loading ? (
        <div className="w-24 h-24 mx-auto my-5 border-t-2 border-blue-500 rounded-full animate-spin"></div>
      ) : (
        <div>
          {questions.length !== 0 && (
            <TestPage
              id={state.id}
              lang={state.lang}
              level={state.level}
              questions={questions}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Test;
