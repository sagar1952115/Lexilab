import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const user = localStorage.getItem("user");
  const User = JSON.parse(user);
  const arr = { en: "ENGLISH", es: "SPANISH", de: "GERMAN" };
  const [learningData, setLearningData] = useState([]);

  useEffect(() => {
    fetchLearningInfo();
    // eslint-disable-next-line
  }, []);
  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/signin";
  };
  const fetchLearningInfo = async () => {
    try {
      const res = await axios.get(`/api/user/profile/${User.data._id}`);
      setLearningData(res.data.learningInfo);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex justify-between w-11/12">
        <button className="p-1 my-2 font-bold text-white rounded bg-blue">
          Update
        </button>
        <button className="p-1 my-2 font-bold text-white rounded bg-gray ">
          Reset
        </button>
      </div>
      <div className="relative w-32 h-32 list-none rounded-full bg-gradient-to-b from-lightblue to-blue">
        <div className="absolute text-6xl text-white top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
          {" "}
          {User.data.name[0].toUpperCase()}
        </div>
      </div>
      <div className="m-2 text-xl font-extrabold lg:2xl">
        {User.data.name.toUpperCase()}
      </div>
      <h1 className="mt-4 text-2xl font-extrabold text-center lg:text-4xl text-blue">
        Languages Learning
      </h1>

      <div className="flex flex-col m-4 md:flex-row">
        {learningData.length !== 0 ? (
          learningData.map((curr, i) => {
            return (
              <div
                key={i}
                className="flex items-center justify-between w-64 h-32 p-1 m-4 "
              >
                <div className="flex items-center justify-center w-3/4 h-full text-2xl font-extrabold text-white bg-black rounded-l-lg bg-gradient-to-b from-graylight to-graydark">
                  {arr[curr.lang_id]}
                </div>
                {/* <div className="bg-black">
          </div> */}
                <div className="flex items-center justify-center w-1/4 h-full text-2xl font-extrabold text-white rounded-r-lg bg-gradient-to-r from-graylight to-graydark ">
                  {curr.score}
                </div>
              </div>
            );
          })
        ) : (
          <div>No Data Available</div>
        )}
      </div>
      <div className="flex justify-between w-11/12">
        <button
          onClick={handleLogout}
          className="p-1 my-2 font-bold text-white rounded bg-orange"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
