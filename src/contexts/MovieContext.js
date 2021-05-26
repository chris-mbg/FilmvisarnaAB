import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);

  const fetchAllMovies = async () => {
    let result = await fetch("/api/v1/movies/");
    result = await result.json();
    if (result.status !== "error") {
      setAllMovies(result);
    }
  };

  // All movies fetch from DB on render
  useEffect(() => fetchAllMovies(), []);


  const values = {
    allMovies,
  };

  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
