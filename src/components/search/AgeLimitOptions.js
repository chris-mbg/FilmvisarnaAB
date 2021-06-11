import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../../contexts/MovieContext";

const AgeLimitOptions = () => {
  const filterOptions = require("../../utilities/filterOptions/filterOptions.json");

  const { userRequest, setUserRequest } = useContext(MovieContext);

  useEffect(() => {
    if (Object.keys(userRequest).length === 0) {
      let radios = document.querySelectorAll(".ageLimitRadio");
      console.log("radios", radios);
      radios.forEach(radio => radio.checked = false);
    }
    console.log(userRequest.ageLimit)
  }, [userRequest]);

  return (
    <form id="radioForm">
      {filterOptions.movieAgeLimits.map((limit, i) => (
        <div key={i}>
          <input
            className="ageLimitRadio"
            type="radio"
            value={limit}
            name="ageLimit"
            onChange={(e) => setUserRequest({ ...userRequest, ageLimit: e.target.value})}
            // checked={radioSelected == limit}
          />
          <label for={limit} className="ml-2">
            {limit.slice(3)} år
          </label>
        </div>
      ))}
    </form>
  );
};

export default AgeLimitOptions;
