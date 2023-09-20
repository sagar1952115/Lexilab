import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import LanguageSidebar from "../components/LanguageSidebar";
import LeaderBoard from "../components/LeaderBoard";
import LanguageTopics from "../components/LanguageTopics";
import { MdLeaderboard } from "react-icons/md";

const Language = () => {
  let { state } = useLocation();

  const [level, setLevel] = useState(state.level);
  const [openLeaderBoard, setOpenLeaderBoard] = useState(false);
  return (
    <div className="absolute w-full">
      <div
        onClick={() => setOpenLeaderBoard(true)}
        className="relative w-full lg:hidden top-2 right-2"
      >
        <MdLeaderboard className="absolute top-5 right-2" size="1.5rem" />
      </div>
      <h1 className="p-5 text-4xl font-extrabold text-center lg:hidden">
        {state.name.toUpperCase()}
      </h1>

      <LanguageSidebar
        setOpenLeaderBoard={setOpenLeaderBoard}
        setLevel={setLevel}
        level={level}
      />
      <LanguageTopics lang={state.name} id={state.id} level={level} />
      {openLeaderBoard && (
        <LeaderBoard
          lang_id={state.id}
          setOpenLeaderBoard={setOpenLeaderBoard}
        />
      )}
    </div>
  );
};

export default Language;
