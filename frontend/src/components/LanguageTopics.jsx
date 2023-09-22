import React, { useEffect, useState } from "react";
import axios from "axios";

import TopicCard from "./TopicCard";

const LanguageTopics = ({ lang, id, level }) => {
  const [topic, setTopic] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetchTopics();
    // eslint-disable-next-line
  }, [level]);
  const fetchTopics = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://lexilab.onrender.com/api/topics?lang_id=${id}&level=${level}`
    );
    setTopic(response.data.topics);
    setLoading(false);
  };
  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center lg:h-screen lg:absolute lg:-top-14 lg:right-0 lg:bottom-0 lg:w-3/4 h-96">
          <div className="w-24 h-24 mx-auto my-5 border-t-2 border-blue-500 rounded-full animate-spin"></div>
        </div>
      ) : (
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
      )}
    </>
  );
};

export default LanguageTopics;
