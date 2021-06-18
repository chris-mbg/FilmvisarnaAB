import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { MovieContext } from "./MovieContext";
import { UserContext } from "./UserContext";

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {
  const { getScreeningsForMovie } = useContext(MovieContext);
  const { getAllReservationsForUser } = useContext(UserContext);

  const [movieIdOnOrderPage, setMovieIdOnOrderPage] = useState(null);
  const [screeningIdOnOrderPage, setScreeningIdOnOrderPage] = useState(null);

  const [movieScreenings, setMovieScreenings] = useState(null);
  const [screeningToShow, setScreeningToShow] = useState(null);

  const [ticketsChosen, setTicketsChosen] = useState([]);

  useEffect(() => {
    async function changeMovie() {
      if (
        movieIdOnOrderPage &&
        movieScreenings &&
        movieIdOnOrderPage !== movieScreenings[0].movieId
      ) {
        setMovieScreenings(null);
        setScreeningToShow(null);
      }
      if (movieIdOnOrderPage) {
        setMovieScreenings(await getScreeningsForMovie(movieIdOnOrderPage));
      }
    }
    changeMovie();
  }, [movieIdOnOrderPage]);

  useEffect(() => {
    // If change in movie or screening --> reset ticketsChosen
    setTicketsChosen([]);
  }, [screeningIdOnOrderPage, movieIdOnOrderPage]);

  // Select right screening to show on OrderPage
  useEffect(() => {
    if (screeningIdOnOrderPage === null) {
      setScreeningToShow(null);
    } else if (screeningIdOnOrderPage && movieScreenings) {
      setScreeningToShow(
        ...movieScreenings.filter(
          (screen) => screen._id === screeningIdOnOrderPage
        )
      );
    }
  }, [screeningIdOnOrderPage, movieScreenings]);

  useEffect(() => {}, [
    movieIdOnOrderPage,
    movieScreenings,
    screeningIdOnOrderPage,
    screeningToShow,
  ]);

  const getTotalPrice = (ticketsArray, fullPrice) => {
    return ticketsArray.reduce((totalPrice, currVal) => {
      let ticketPrice =
        currVal.ticketType === "adult"
          ? fullPrice
          : currVal.ticketType === "senior"
          ? 0.8 * fullPrice
          : 0.7 * fullPrice; // The ticketType is "child"
      totalPrice += ticketPrice;
      return totalPrice;
    }, 0);
  };

  const saveReservation = async (reservationInfo) => {

    let result = await fetch("/api/v1/reservations/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationInfo),
    });
    result = await result.json();

    if (result.status === "error") {
      return false;
    } else {
      //Update list of user reservations showed on ProfilePage.
      getAllReservationsForUser();
      return result.reservation;
    }
  };

  const userConfirmsReservation = async () => {
    let result = await saveReservation({
      screeningId: screeningToShow._id,
      tickets: ticketsChosen,
      totalPrice: getTotalPrice(ticketsChosen, screeningToShow.price),
    });
    return result;
  };

  const userCancelsReservation = async (reservationId) => {
    try {
      const response = await fetch(`/api/v1/reservations/${reservationId}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });

      // If HTTP request (delete) was successful - return true.
      if (response.status === 200) {
        // Updates user's reservation list/array.
        getAllReservationsForUser();

        return true;
      } else {
        // If HTTP request (delete) was unsuccessful - throw new Error.
        throw new Error();
      }
    } catch (error) {
      return false;
    }
  };

  const values = {
    saveReservation,
    movieIdOnOrderPage,
    setMovieIdOnOrderPage,
    screeningIdOnOrderPage,
    setScreeningIdOnOrderPage,
    movieScreenings,
    screeningToShow,
    ticketsChosen,
    setTicketsChosen,
    userConfirmsReservation,
    getTotalPrice,
    userCancelsReservation,
  };

  return (
    <ReservationContext.Provider value={values}>
      {props.children}
    </ReservationContext.Provider>
  );
};

export default ReservationContextProvider;

//     reservationInfo needs to look like following for func to work
//     {
//       screeningId: "ObjectId",
//       tickets: [{
//         ticketType: "adult",
//         seatNumber: [y,x]
//       }]
//       totalPrice: Number,
//     }
