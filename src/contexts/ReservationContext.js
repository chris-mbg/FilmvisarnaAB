import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {

  const [movieToShow, setMovieToShow] = useState(null);
  const [movieScreenings, setMovieScreenings] = useState(null);
  const [screeningToShow, setScreeningToShow] = useState(null);

  const { getAllScreeningsForMovie } = useContext(MovieContext);

  useEffect(async () => {
    if(movieToShow) {
      setMovieScreenings(await getAllScreeningsForMovie(movieToShow));
    }
  }, [movieToShow]);

  useEffect(() => console.log("movie Screenings", movieScreenings),[movieScreenings]);

  const values = {
    movieToShow,
    setMovieToShow,
    movieScreenings,
    screeningToShow,
    setScreeningToShow
  };

  return (
    <ReservationContext.Provider value={values}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;