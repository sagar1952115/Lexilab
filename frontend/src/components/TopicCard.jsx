import React from "react";
import { Link } from "react-router-dom";

const TopicCard = ({ topic, id, lang, level }) => {
  return (
    <div className="w-full ">
      <Link
        to={`/${id}/${topic}/test`}
        state={{
          topic,
          lang,
          level,
          id,
        }}
      >
        <div className="flex justify-center w-10/12 h-16 mx-auto my-2 text-lg font-bold text-white rounded bg-blue">
          <div className="flex items-center justify-center">
            {topic.toUpperCase()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TopicCard;
