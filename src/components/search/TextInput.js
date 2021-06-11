import { useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";

const TextInput = ({ inputType }) => {
  const { userRequest, setUserRequest } = useContext(MovieContext);

  return (
    <>
      {inputType === "actor" ? (
        <>
          <input
            type="text"
            placeholder="Sök skådespelare..."
            value={userRequest.actor || ""}
            onChange={(e) =>
              setUserRequest({ ...userRequest, actor: e.target.value })
            }
          />
        </>
      ) : (
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
      )}
    </>
  );
};

export default TextInput;
