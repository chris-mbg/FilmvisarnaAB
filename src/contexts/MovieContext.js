import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);

  /**
   *  request example
   */
  const userRequest = {
    actors: "Chris Pratt",
    // productionCountries: "United States",
    // ageLimit: "PG-11",
    // director: "James Gunn",
    // genre: "Äventyr",
    // language: "Engelska",
    // length: "136 min",
    // productionYear: "2017",
    title: "Gu",
  };

  // All movies fetch from DB on render
  useEffect(() => fetchFilteredMovies(userRequest), []);

  /**
   * if the object is empty - returns all data
   * if the object contains request fields - returns specific movie items
   * @param {object} request
   */
  const fetchFilteredMovies = async (request) => {
    // should stringify for pass through URL
    request = JSON.stringify(request);

    if (!request) {
      let result = await fetch("/api/v1/movies/");
      result = await result.json();
      if (result.status !== "error") {
        setAllMovies(result);
      }
    } else {
      let result = await fetch(`/api/v1/movies/${request}`);
      result = await result.json();
      if (result.status !== "error") {
        setAllMovies(result);
      }
    }
  };

  /* GLÖM INTE ATT TA BORT */
  // GET - search for posts
  // const search = async (filter) => {
  //   const response = await fetch(`/api/v1/posts/search/?${filter}`);

  //   const data = await response.json();

  //   setFilterPosts(data);
  // };

  /* GLÖM INTE ATT TA BORT */

  // const fetchAllMovies = async () => {
  //   let result = await fetch("/api/v1/movies/");
  //   result = await result.json();
  //   if (result.status !== "error") {
  //     setAllMovies(result);
  //   }
  // };

  const getMovieById = async (movieId) => {
    let result = await fetch(`/api/v1/movies/movie/${movieId}`);
    result = await result.json();

    if (result.status !== "error") {
      return result;
    }
  };

  const getAllScreeningsForMovie = async (movieId) => {
    let result = await fetch(`/api/v1/screenings/${movieId}`);
    result = await result.json();
    if (result.status !== "error") {
      // Makes the startTime property into a Date object before returning the result
      result = result.map((screening) => ({
        ...screening,
        startTime: new Date(screening.startTime),
      }));
      return result;
    }
  };

  const values = {
    allMovies,
    getMovieById,
    getAllScreeningsForMovie,
  };

  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
