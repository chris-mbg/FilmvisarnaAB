import { createContext, useEffect, useState, useCallback } from "react";
import { debounce } from "../utilities/utilities"

export const MovieContext = createContext();

const MovieContextProvider = (props) => {

  const [allMovies, setAllMovies] = useState(null);
  const [userRequest, setUserRequest] = useState({});

  /** user request example */
// userRequest = {
//   actors: "Chris",
//   ageLimit: "PG-7",
//   director: "Boden",
//   genre: "Äventyr",
//   language: "Franska",
//   minLength: 93,
//   maxLength: 136,
//   textSearch: "Dalida",
//   price: 90,
//   startTime:"2021-07-24",
//  };

  useEffect(() => {
    console.log("User request changed", userRequest);
  }, [userRequest]);

  /**
   * if the object is empty - returns all data
   * if the object contains request fields - returns specific movie items
   * @param {object} request
   */
  const fetchFilteredMovies = async (userRequest) => {
    console.log("Fetching... userReq", userRequest)
    let result = null;

    if (Object.keys(userRequest).length === 0 ) {
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

      result = await fetch(`/api/v1/movies/?${queryString}`);
    }

    result = await result.json();
      if (result.status !== "error") {
        setAllMovies(result);
      }
  };

  // To avoid to many fetches to the DB, debounce function (defined in utilities.js) is used. Will invoke its callback after waiting 300 ms after the last call.
  //useCallback is used not to get a "new" function every time the component updates (mainly because of the userRequest-variable)
  const debounceFetch = useCallback(debounce((userRequest) => fetchFilteredMovies(userRequest), 300), []);

  // Calling the debounceFetch function on every change in the userRequest variable.
  useEffect(() => debounceFetch(userRequest), [userRequest]);


  const getMovieById = async (movieId) => {
    let result = await fetch(`/api/v1/movies/${movieId}`);
    result = await result.json();

    if (result.status !== "error") {
      return result;
    }
  };


  const getScreeningsForMovie = async (movieId, date) => {
    let queryString;
    if(movieId){queryString = `movieId=${movieId}`}
    if(date){queryString = `date=${date}`}

    let result = await fetch(`/api/v1/screenings/?${queryString}`);
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
    getScreeningsForMovie,
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
