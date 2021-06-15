import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import styles from "./styles/FilterWrapper.module.css";


const TextInput = ({ inputType }) => {
  const { userRequest, setUserRequest } = useContext(MovieContext);

  return (
    <>
      {inputType === "actor" ? (
        <>
          <input
            type="text"
            placeholder="Sök skådespelare..."
            value={userRequest.actors || ""}
            onChange={(e) =>
              setUserRequest({ ...userRequest, actors: e.target.value })
            }
          />
        </>
      ) : inputType === "director" ? (
        <>
          <input
            type="text"
            placeholder="Sök regissör..."
            value={userRequest.director || ""}
            onChange={(e) =>
              setUserRequest({ ...userRequest, director: e.target.value })
            }
          />
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Sök..."
            value={userRequest.textSearch|| ""}
            onChange={(e) =>
              setUserRequest({ ...userRequest, textSearch: e.target.value })
            }
            className={styles.textSearch}
          />
        </>
      )}
    </>
  );
};

export default TextInput;
