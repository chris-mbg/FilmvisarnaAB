import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);
  // for render in OrderPage
  const [orderScreenings, setOrderScreenings] = useState(null);
  // All movies fetch from DB on render

  useEffect(() => fetchAllMovies(), []);

  const fetchAllMovies = async () => {
    let result = await fetch("/api/v1/movies/");
    result = await result.json();
    if (result.status !== "error") {
      setAllMovies(result);
    }
  };

  const getMovieById = async (movieId) => {
    let result = await fetch(`/api/v1/movies/${movieId}`);
    result = await result.json();
    if (result.status !== "error") {
      return result;
    }
  };

  const getAllScreeningsForMovie = async (movieId) => {
    let result = await fetch(`/api/v1/screenings/${movieId}`);
    result = await result.json();
    if (result.status !== "error") {
      // todo delete
      console.log("screening result", result);
      return result;
    }
  };

  const getScreeningById = async (screeningId) => {
    let result = await fetch(`/api/v1/screenings/${screeningId}`)
    result = await result.json();
    if (result.status !== "error") {
      // todo delete
      console.log("screening result", result);
      return result;
    }
  }

  const values = {
    allMovies,
    getMovieById,
    getAllScreeningsForMovie,
    orderScreenings,
    setOrderScreenings,
    getScreeningById
  };

  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
