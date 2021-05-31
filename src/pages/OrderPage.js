import React, { useContext, useEffect, useState } from "react";
import Auditorium from "../components/order/Auditorium";
import ScreeningPicker from '../components/ScreeningPicker'

import styles from '../css/OrderPage.module.css';



// For this page is necessarily (otherwise page not be loaded) to click the "BOOK" button, Because screening id  is needed for to find  the desired movie !!!!!
export default function OrderPage() {
  // const { getMovieById, orderScreenings } = useContext(MovieContext);

  // // to render information about the current movie
  // const [currentMovie, setCurremtMovie] = useState(null);
  // // for rendering a matrix of seats in a particular auditorium (dynamically changes, depending on input select)
  // const [selectedScreening, setSelectedScreening] = useState(null);
  // // toggle class when user to click on cinema seat
  // const [isActive, setActive] = useState(false)

  // useEffect(async () => {
  //   //  geted from MovieCard when was click on the "BOKA" button
  //   if (orderScreenings) {
  //     let movie = await getMovieById(orderScreenings[0].movieId);
  //     setCurremtMovie(movie);
  //     setSelectedScreening()
  //     // todo delete console log
  //     console.log(movie);
  //     console.log(orderScreenings);
  //   }
  // }, []);

//   const getSelectedScreening = (e) => {
//     setSelectedScreening(
//       orderScreenings.filter((screen) => screen.startTime === e.target.value)
//     );
//   };

//  const setActiveHandler = () => console.log('click');


  return (
    <div>
      <h1>Boka biljetter</h1>
      <ScreeningPicker />
      <Auditorium />
    </div>
  );
}
