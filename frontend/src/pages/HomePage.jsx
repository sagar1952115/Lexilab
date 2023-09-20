import React from "react";
import LanguageList from "../components/LanguageList";

const HomePage = () => {
  return (
    <div className="w-full h-screen">
      <div className="m-auto ">
        <div className="w-full h-32 flex items-center font-extrabold lg:text-6xl lg:h-64 justify-center text-2xl text-center text-white bg-blue p-1.5">
          Language Learning Made Joyful and Effortless!
        </div>
        <LanguageList />
      </div>
    </div>
  );
};

export default HomePage;
