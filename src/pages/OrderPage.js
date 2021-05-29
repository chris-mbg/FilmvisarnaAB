import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { MovieContext } from "../contexts/MovieContext";

import styles from '../css/OrderPage.module.css';


// For this page is necessarily (otherwise page not be loaded) to click the "BOOK" button, Because screening id  is needed for to find  the desired movie !!!!!
export default function OrderPage() {
  const { getMovieById, orderScreenings } = useContext(MovieContext);

  // to render information about the current movie
  const [currentMovie, setCurremtMovie] = useState(null);
  // for rendering a matrix of seats in a particular auditorium (dynamically changes, depending on input select)
  const [selectedScreening, setSelectedScreening] = useState(null);

  useEffect(async () => {
    //  geted from MovieCard when was click on the "BOKA" button
    if (orderScreenings) {
      let movie = await getMovieById(orderScreenings[0].movieId);
      setCurremtMovie(movie);
      // todo delete console log
      console.log(movie);
      console.log(orderScreenings);
    }
  }, []);

  const getSelectedScreening = (e) => {
    setSelectedScreening(
      orderScreenings.filter((screen) => screen.startTime === e.target.value)
    );
  };

  const renderCinemaMatrix = () => {
    const cinemaMatrix = [];
    if(selectedScreening){

      const seats = selectedScreening[0].seats

    for (let row = 0; row < seats.length; row++) {
      cinemaMatrix.push(<br></br>);
      for (let seat = 0; seat < seats[row].length; seat++) {

        // check for reserved places by values from db
        if (seats[row][seat].reserved === 1) {
          cinemaMatrix.push(
            <div className={`${styles.chairItem} ${styles.reserved}`}key={seats[row][seat].id}>
              <span className={styles.tooltip}>
                row: <strong>{row + 1}</strong>
                chair: <strong>{seat + 1} </strong>
              </span>
            </div>
          );
        } else {
          // 
          cinemaMatrix.push(
            <div
            className={styles.chairItem }
              key={seats[row][seat].id}
              // className={toggleActiveStyles(row, seat, seats[row][seat].id)}
              // onClick={() => reserveTicket(row, seat, seats[row][seat].id)}
            >
              <span className={styles.tooltip}>
                row:<strong> {row + 1}</strong>
                chair: <strong>{seat + 1}</strong>
              </span>
            </div>
          );
        }
      }
    }
    return <div className="container">{cinemaMatrix}</div>;
    } else {<h2>...loading</h2>}
    

  }

  const renderScreenings = () => (
    <>
      <Row>
        <Col md={4}> <h3>{currentMovie.title}</h3></Col>
        <Col>
          <select onChange={(e) => getSelectedScreening(e)}>
            {orderScreenings.map((time) => (
              <option key={time.startTime} value={time.startTime}>
                {new Date(time.startTime).toLocaleString("sv-SE")}
              </option>
            ))}
          </select>
        </Col>
      </Row>
            <h5>{selectedScreening && selectedScreening[0].auditoriumName}</h5>
      <Row>
        <Col md={8} className={styles.matrixWrapper}>
          {renderCinemaMatrix()}
        </Col>
      </Row>
    </>
  );

  return (
    <div>
      <h1>Boka bilijetter</h1>
      {orderScreenings && currentMovie ? (
        renderScreenings()
      ) : (
        <h2>...loading</h2>
      )}
    </div>
  );
}
