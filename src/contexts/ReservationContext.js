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
    let result = await fetch("/api/v1/reservations/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(reservationInfo),
    });
    result = await result.json();
    if (!result.status === "error") {
      console.log("Seats booked", result.reservation);
      // Update list of user reservations showed on ProfilePage.
      return true;
    } else {
      console.log("Error. Could not save reservation");
      return false;
    }
  };

  // ! For testing purposes. Delete when done testing
  const { loggedInUser } = useContext(UserContext);

  //! Test booking. Delete when done testing.
  useEffect(() => {
    if (loggedInUser) {
      saveReservation({
        screeningId: "60acbc58b7b50656ccec8734",
        tickets: [
          {
            ticketType: "adult",
            seatNumber: [2, 2],
          },
        ],
        totalPrice: 90,
      });
    }
  }, [loggedInUser]);

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
