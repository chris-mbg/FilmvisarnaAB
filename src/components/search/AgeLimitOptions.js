import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";

const AgeLimitOptions = () => {
  const filterOptions = require("../../utilities/filterOptions/filterOptions.json");

  const { userRequest, setUserRequest } = useContext(MovieContext);

  return (
    <>
      {filterOptions.movieAgeLimits.map((limit, i) => (
        <div key={i}>
          <input
            type="radio"
            value={limit}
            name="ageLimit"
            onChange={(e) =>
              setUserRequest({ ...userRequest, ageLimit: e.target.value })
            }
          />
          <label for={limit}>{limit.slice(3)} år</label>
        </div>
      ))}
    </>
  );
};

export default AgeLimitOptions;
