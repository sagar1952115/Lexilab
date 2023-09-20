import React, { useEffect, useState } from "react";
import axios from "axios";

import LanguageCard from "./LanguageCard";
const LanguageList = () => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    if (languages.length === 0) {
      fetchLanguage();
    }
  }, [languages]);
  const fetchLanguage = async () => {
    try {
      const response = await axios.get("/api/lang");
      setLanguages(response.data.lang);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <h1 className="flex justify-center m-5 text-2xl font-bold lg:text-4xl lg:m-10">
        Choose the Language
      </h1>
      <div className="flex flex-col flex-wrap items-center justify-center md:flex-row">
        {languages &&
          languages.map((curr) => {
            return (
              <LanguageCard
                name={curr.name}
                key={curr.lang_id}
                id={curr.lang_id}
              />
            );
          })}
      </div>
    </div>
  );
};

export default LanguageList;
