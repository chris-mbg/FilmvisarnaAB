import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { MovieContext } from "./MovieContext";

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {
  const { getAllScreeningsForMovie } = useContext(MovieContext);

  const [movieOnOrderPage, setMovieOnOrderPage] = useState(null);
  const [screeningIdOnOrderPage, setScreeningIdOnOrderPage] = useState(null);

  const [movieScreenings, setMovieScreenings] = useState(null);
  const [screeningToShow, setScreeningToShow] = useState(null);

  const [seatsChosen, setSeatsChosen] = useState([]);

  useEffect(() => {
    async function changeMovie() {
      if(movieOnOrderPage && movieScreenings && (movieOnOrderPage.movieId !== movieScreenings[0].movieId)) {
        setMovieScreenings(null);
        setScreeningToShow(null)
      }
      if(movieOnOrderPage) {
        setMovieScreenings(await getAllScreeningsForMovie(movieOnOrderPage.movieId));
      }
    }
    changeMovie();
  }, [movieOnOrderPage]);

  useEffect(() => {
    // If change in movie or screening --> reset seatsChosen
    setSeatsChosen([]);
  },[screeningIdOnOrderPage, movieOnOrderPage]);

  useEffect(() => console.log("Seats chosen by user", seatsChosen));


  useEffect(() => {
    async function setScreen() {
      if(screeningIdOnOrderPage && movieScreenings) {
        console.log("Setting screening to show..")
        setScreeningToShow(movieScreenings.filter(screen => screen._id === screeningIdOnOrderPage));
      }
    }
    setScreen();
  }, [screeningIdOnOrderPage, movieScreenings]);

  useEffect(() => console.log("movie Screenings", movieScreenings),[movieScreenings]);
  useEffect(() => console.log("one screening", screeningToShow),[screeningToShow]);

  const values = {
    movieOnOrderPage,
    setMovieOnOrderPage,
    screeningIdOnOrderPage,
    setScreeningIdOnOrderPage,
    movieScreenings,
    screeningToShow,
    //setScreeningToShow,
    seatsChosen,
    setSeatsChosen,
  };

  return (
    <ReservationContext.Provider value={values}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;
import { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {
  //     reservationInfo needs to look like following for func to work
  //     {
  //       screeningId: "ObjectId",
  //       tickets: [{
  //         ticketType: "adult",
  //         seatNumber: [y,x]
  //       }]
  //       totalPrice: Number,
  //     }

  const saveReservation = async (reservationInfo) => {
    console.log(reservationInfo);
    let result = await fetch("/api/v1/reservations/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationInfo),
    });
    result = await result.json();
    console.log("in saveReserv, result:", result);
    if (result.status === "error") {
      console.log("Error. Could not save reservation");
      return false;
    } else {
      console.log("Seats booked", result.reservation);
      //* When possible --> Update list of user reservations showed on ProfilePage.
      return true;
    }
  };

  const values = {
    saveReservation,
  };

  return (
    <ReservationContext.Provider value={values}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;
