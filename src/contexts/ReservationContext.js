import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {

  const [movieOnOrderPage, setMovieOnOrderPage] = useState(null);

  const [screeningIdOnOrderPage, setScreeningIdOnOrderPage] = useState(null);
  const [movieScreenings, setMovieScreenings] = useState(null);
  const [screeningToShow, setScreeningToShow] = useState(null);

  const { getAllScreeningsForMovie } = useContext(MovieContext);

  useEffect(async () => {
    if(movieOnOrderPage && movieScreenings && (movieOnOrderPage?.movieId !== movieScreenings[0].movieId)) {
      setMovieScreenings(null);
      setScreeningToShow(null)
    }
    if(movieOnOrderPage) {
      setMovieScreenings(await getAllScreeningsForMovie(movieOnOrderPage.movieId));
    }
  }, [movieOnOrderPage]);

  useEffect(async () => {
    if(screeningIdOnOrderPage && movieScreenings) {
      console.log("Setting screening to show..")
      setScreeningToShow(movieScreenings.filter(screen => screen._id === screeningIdOnOrderPage));
    }
  }, [movieScreenings]);

  useEffect(() => console.log("movie Screenings", movieScreenings),[movieScreenings]);
  useEffect(() => console.log("one screening", screeningToShow),[screeningToShow]);

  const values = {
    movieOnOrderPage,
    setMovieOnOrderPage,
    screeningIdOnOrderPage,
    setScreeningIdOnOrderPage,
    movieScreenings,
    screeningToShow,
    // setScreeningToShow,
  };

  return (
    <ReservationContext.Provider value={values}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;