import React, { useState, useEffect } from "react";
import TestPage from "./TestPage";
import axios from "axios";

import { useLocation } from "react-router-dom";

const Test = () => {
  const { state } = useLocation();

  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    if (questions.length === 0) {
      fetchQuestion();
    }
    // eslint-disable-next-line
  }, [questions]);
  const fetchQuestion = async () => {
    try {
      const res = await axios.get(
        `/api/question?lang_id=${
          state.id
        }&category=${state.topic.toLowerCase()}`
      );
      setQuestions(res.data.lang);
    } catch (err) {
      console.log(err);
    }
  };
  return (
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
  );
};

export default Test;
