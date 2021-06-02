import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ReservationContext } from "../contexts/ReservationContext";
import Auditorium from "../components/order/Auditorium";
import ScreeningPicker from "../components/order/ScreeningPicker";
import CustomButton from "../components/CustomButton";
import styles from "../css/OrderPage.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Tickets from "../components/order/Tickets";

// For this page is necessarily (otherwise page not be loaded) to click the "BOOK" button, Because screening id  is needed for to find  the desired movie !!!!!
export default function OrderPage() {
  const { setMovieIdOnOrderPage, setScreeningIdOnOrderPage, setScreeningToShow } =
    useContext(ReservationContext);
  const { movieId, screeningId } = useParams();

  useEffect(() => setScreeningIdOnOrderPage(screeningId), [screeningId]);
  useEffect(() => setMovieIdOnOrderPage(movieId), [movieId]);

  // Fix for reseting screeningtoshow and screeningId if user leaves order page. 
  useEffect(() => {
    return () => {
      console.log("In return..");
      setScreeningToShow(null);
      setScreeningIdOnOrderPage(null);
    };
  }, []);

  return (
    <Container className="mt-5" fluid>
      <h2>Boka biljetter</h2>
      <ScreeningPicker />
      <Auditorium />
      <Tickets />
    </Container>
  );
}
