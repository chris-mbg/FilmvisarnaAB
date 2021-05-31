import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReservationContext } from "../contexts/ReservationContext";
import Auditorium from "../components/order/Auditorium";
import ScreeningPicker from "../components/ScreeningPicker";

import styles from "../css/OrderPage.module.css";
import Tickets from "../components/order/Tickets";

// For this page is necessarily (otherwise page not be loaded) to click the "BOOK" button, Because screening id  is needed for to find  the desired movie !!!!!
export default function OrderPage() {
  const { setMovieIdOnOrderPage, setScreeningIdOnOrderPage } =
    useContext(ReservationContext);
  const { movieId, screeningId } = useParams();

  useEffect(() => setScreeningIdOnOrderPage(screeningId), [screeningId]);
  useEffect(() => setMovieIdOnOrderPage(movieId), [movieId]);

  // useEffect(() => {
  //   return () => {
  //     setScreeningIdOnOrderPage(null);
  //   };
  // });

  return (
    <div className="container">
      {/* <h1>Boka biljetter</h1> */}
      <ScreeningPicker />
      <Auditorium />
      <Tickets />
    </div>
  );
}
