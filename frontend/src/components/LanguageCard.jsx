import React from "react";
import { Link } from "react-router-dom";

const LanguageCard = ({ name, id, lang }) => {
  return (
    <div>
      <Link
        to={`/lang/${id}?level=easy`}
        state={{
          name,
          id,
          lang,
          level: "easy",
        }}
      >
        <div className="relative w-56 h-32 m-3 text-lg font-bold text-white rounded bg-gray">
          <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
            {name.toUpperCase()}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default LanguageCard;
