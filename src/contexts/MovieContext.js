import { createContext, useEffect, useState } from "react";

export const MovieContext = createContext();

const MovieContextProvider = (props) => {
  const [allMovies, setAllMovies] = useState(null);

  /**
   *  request example
   */
  const userRequest = {
    // actors: "ChrisPratt",
    // productionCountries: "United States",
    // ageLimit: "PG-11",
    // director: "",
    // genre: "Äventyr",
    language: "Engelska",
    // length: "136 min",
    productionYear: 2017,
    title: "gu",
    price: 90,
    // startTime: 2021-05-24T13:00:00.000+00:00,
    auditoriumName: "Lilla salongen"
  };

  // All movies fetch from DB on render
  useEffect(() => fetchFilteredMovies(userRequest), []);

  /**
   * if the object is empty - returns all data
   * if the object contains request fields - returns specific movie items
   * @param {object} request
   */
  const fetchFilteredMovies = async (userRequest) => {
    let result = null;

    if (Object.keys(userRequest).length === 0) {
      result = await fetch("/api/v1/movies/");

    } else {
      let queryString = "";

      for (let key in userRequest) {
        // delete empty key
        if (userRequest[key] === "") {
          delete userRequest[key]
        }else{
          queryString += `${key}=${userRequest[key]}&`;
        }
      }

      // delete last "&"
      queryString = queryString.slice(0, -1);
      // todo delete
      console.log("::queryString:::", queryString, typeof queryString);

      result = await fetch(`/api/v1/movies/?${queryString}`);
    }

    result = await result.json();
      if (result.status !== "error") {
        setAllMovies(result);
        console.log(result)
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
