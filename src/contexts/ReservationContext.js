import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
import { MovieContext } from "./MovieContext";
import { UserContext } from "./UserContext";

export const ReservationContext = createContext();

const ReservationContextProvider = (props) => {
  const { getAllScreeningsForMovie } = useContext(MovieContext);
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
        setMovieScreenings(await getAllScreeningsForMovie(movieIdOnOrderPage));
      }
    }
    changeMovie();
  }, [movieIdOnOrderPage]);

  useEffect(() => {
    // If change in movie or screening --> reset ticketsChosen
    setTicketsChosen([]);
  }, [screeningIdOnOrderPage, movieIdOnOrderPage]);

  useEffect(() => console.log("Tickets/seats chosen by user", ticketsChosen));

  // Better to get this from BE and DB..? But we still need to get all screeenings also, and therefore OK to filter in FE, because we already have the info here...
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

  useEffect(
    () => console.log("movie Screenings", movieScreenings),
    [movieScreenings]
  );
  useEffect(
    () => console.log("one screening", screeningToShow),
    [screeningToShow]
  );

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

  // ! Test variable to be deleted when test is done
  let testTickets = [
    {
      ticketType: "child",
      seatNumber: [0, 0],
    },
    {
      ticketType: "senior",
      seatNumber: [0, 1],
    },
    {
      ticketType: "adult",
      seatNumber: [0, 2],
    },
  ];
  // ! Test case to be deleted when test is done
  console.log("total price test", getTotalPrice(testTickets, 100));

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
