import React, { useEffect, useState } from "react";
import axios from "axios";

import TopicCard from "./TopicCard";

const LanguageTopics = ({ lang, id, level }) => {
  const [topic, setTopic] = useState([]);
  useEffect(() => {
    fetchTopics();
    // eslint-disable-next-line
  }, [level]);
  const fetchTopics = async () => {
    const response = await axios.get(
      `https://lexilab.onrender.com/api/topics?lang_id=${id}&level=${level}`
    );
    setTopic(response.data.topics);
  };
  return (
    <div className=" lg:bg-white zindex lg:absolute lg:top-0 lg:right-0 lg:bottom-0 lg:w-3/4">
      <div className="lg:mt-28">
        <h1 className="hidden m-5 text-4xl font-extrabold text-center lg:block">
          {lang.toUpperCase()}
        </h1>
        <div className="flex flex-col flex-wrap items-center justify-center md:flex-row">
          {topic &&
            topic.map((curr) => {
              return (
                <TopicCard
                  key={curr._id}
                  lang={lang}
                  level={level}
                  id={id}
                  topic={curr.topic}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default LanguageTopics;
