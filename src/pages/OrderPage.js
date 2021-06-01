import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReservationContext } from "../contexts/ReservationContext";
import Auditorium from "../components/order/Auditorium";
import ScreeningPicker from "../components/order/ScreeningPicker";
import CustomButton from "../components/CustomButton";

import styles from "../css/OrderPage.module.css";
import Tickets from "../components/order/Tickets";

// For this page is necessarily (otherwise page not be loaded) to click the "BOOK" button, Because screening id  is needed for to find  the desired movie !!!!!
export default function OrderPage() {
  const { setMovieIdOnOrderPage, setScreeningIdOnOrderPage, userConfirmsReservation } =
    useContext(ReservationContext);
  const { movieId, screeningId } = useParams();

  useEffect(() => setScreeningIdOnOrderPage(screeningId), [screeningId]);
  useEffect(() => setMovieIdOnOrderPage(movieId), [movieId]);

  // useEffect(() => {
  //   return () => {
  //     setScreeningIdOnOrderPage(null);
  //   };
  // });

  const handleConfirmClick = async () => {
    let result = await userConfirmsReservation();
    if (!result) {
      console.log("Something went wrong, error with booking tickets");
    } else {
      alert("Tickets booked", result);
    }
  }

  return (
    <div className="container">
      {/* <h1>Boka biljetter</h1> */}
      <ScreeningPicker />
      <Auditorium />
      <Tickets />
      <div className="text-center mt-4">
        <CustomButton text="Boka biljetter" clickHandler={handleConfirmClick}/>
      </div>
    </div>
  );
}
