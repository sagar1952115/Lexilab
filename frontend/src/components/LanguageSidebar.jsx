const LanguageSidebar = ({ setOpenLeaderBoard, setLevel, level }) => {
  return (
    <div className="bg-white lg:border-r-4 border-graylight zindex lg:w-1/4 lg:absolute lg:top-0 lg:bottom-0 lg:left-0 lg:z-0">
      <div className="flex justify-between px-16 py-4 text-lg font-bold lg:h-120 lg:mt-24 lg:flex-col text-blue lg:p-0 lg:justify-normal">
        <div
          className={` w-max ${
            level === "easy"
              ? "lg:text-blue lg:border-2 border-b-4  border-blue"
              : ""
          } p-2 lg:w-3/5 lg:text-center lg:border lg:bg-lightblue lg:text-white lg:rounded lg:mx-auto lg:my-2`}
          onClick={() => setLevel("easy")}
        >
          Easy
        </div>
        <div
          className={`w-max ${
            level === "medium"
              ? "lg:text-blue lg:border-2 border-b-4 border-blue"
              : ""
          } p-2 lg:w-3/5 lg:text-center lg:border lg:bg-lightblue lg:text-white lg:rounded lg:mx-auto lg:my-2`}
          onClick={() => setLevel("medium")}
        >
          Medium
        </div>
        <div
          className={`w-max ${
            level === "hard"
              ? "border-b-4 lg:text-blue lg:border-2 border-blue"
              : ""
          } p-2 lg:w-3/5 lg:text-center lg:border lg:bg-lightblue lg:text-white lg:rounded lg:mx-auto lg:my-2`}
          onClick={() => setLevel("hard")}
        >
          Hard
        </div>
        <div
          className="hidden p-2 cursor-pointer lg:block lg:w-3/5 lg:text-center lg:border lg:bg-lightblue lg:text-white lg:rounded lg:mx-auto lg:my-2"
          onClick={() => setOpenLeaderBoard(true)}
        >
          LearderBoard
        </div>
      </div>
    </div>
  );
};

export default LanguageSidebar;
