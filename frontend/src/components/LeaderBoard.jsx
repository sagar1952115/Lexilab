import React, { useEffect, useState } from "react";
import axios from "axios";

const LeaderBoard = ({ setOpenLeaderBoard, lang_id }) => {
  const [leaderboard, setLeaderBoard] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (leaderboard.length === 0) {
      fetchLeaderBoard();
    }
    // eslint-disable-next-line
  }, [leaderboard]);
  const fetchLeaderBoard = async () => {
    setIsLoading(true);
    try {
      const res = await axios.get(`/api/${lang_id}/leaderboard`);
      setLeaderBoard(res.data.leaderboardData);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.log(err);
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm ">
      {isLoading ? (
        <div className="w-12 h-12 m-auto border-t-2 border-blue-500 rounded-full animate-spin"></div>
      ) : (
        <div className="relative w-11/12 p-8 text-4xl bg-white rounded-lg shadow-lg lg:w-1/4">
          <button
            onClick={() => setOpenLeaderBoard(false)}
            className="absolute px-2 py-1 text-sm font-bold text-white rounded bg-lightblue top-2 right-2 hover:bg-blue"
          >
            &#10005; {/* Close (cross) sign */}
          </button>
          <h1 className="mb-4 text-4xl font-extrabold text-center text-blue">
            Leaderboard
          </h1>
          <div className="flex justify-between w-full p-2 mb-1 text-lg bg-white rounded-lg lg:font-bold">
            <span className="w-1/6 text-center text-blue ">S.no</span>
            <span className="w-4/6 text-center text-blue ">Name</span>
            <span className="w-1/6 text-center text-blue ">Pnt</span>
          </div>
          {leaderboard?.map((curr, i) => {
            return (
              <div
                key={i}
                className="flex justify-between w-full p-2 mb-1 text-lg rounded-lg lg:font-bold text-graydark bg-graylight"
              >
                <span className="w-1/6 text-center ">{i + 1}</span>
                <span className="w-4/6 text-center ">{curr.user_id.name}</span>
                <span className="w-1/6 text-center ">{curr.score}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default LeaderBoard;
