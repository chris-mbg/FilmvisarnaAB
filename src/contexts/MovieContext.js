import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);


  const emptyReqObject = {
    actors: "",
    ageLimit: "",
    director: "",
    genre: "",
    language: "",
    length: "",
    title: "",
    price: "",
    startTime: ""
  }
  const [userRequest, setUserRequest] = useState(emptyReqObject);

  useEffect(() => console.log("User request changed", userRequest), [userRequest])


  /**
  *  request example
  */
 //const userRequest = {
   // actors: "ChrisPratt",
   // productionCountries: "United States",
   // ageLimit: "PG-11",
   // director: "",
   // genre: "Äventyr",
   // language: "Engelska",
   // length: "136 min",
   // productionYear: "2017",
   // title: "gu",
   //price: 90
   // startTime
   // auditoriumName: "Lilla"
 //};



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
      // Makes the startTime property into a Date object before returning the result
      result = result.map(screening => ({...screening, startTime: new Date(screening.startTime)}));
      return result;
    }
  };

  const values = {
    allMovies,
    getMovieById,
    getAllScreeningsForMovie,
    userRequest,
    setUserRequest,
  };

  return (
    <MovieContext.Provider value={values}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieContextProvider;
