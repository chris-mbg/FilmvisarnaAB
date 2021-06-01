import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { MovieContext } from "../contexts/MovieContext";
import { useParams } from "react-router-dom";

import styles from '../css/OrderPage.module.css';
import Chair from '../components/order/Chair';


// For this page is necessarily (otherwise page not be loaded) to click the "BOOK" button, Because screening id  is needed for to find  the desired movie !!!!!
export default function OrderPage() {
  const { getAllScreeningsForMovie } = useContext(MovieContext);
// 
  const [seatsChosen, setSeatsChosen] = useState([]);
  const [isChosen, setIsChosen] = useState(false);

  const { movieId, screeningId} = useParams()
  // to render information about the current movie
  const [currentMovie, setCurremtMovie] = useState(null);
  // for rendering a matrix of seats in a particular auditorium (dynamically changes, depending on input select)
  const [selectedScreening, setSelectedScreening] = useState(null);
  // toggle class when user to click on cinema seat
  const [isActive, setActive] = useState(false)

  useEffect(async () => {
    //  geted from MovieCard when was click on the "BOKA" button
  let screening = await getAllScreeningsForMovie(movieId)
  setCurremtMovie(screening)
  console.log(screening[0].movieId.title);
  }, []);

  const getSelectedScreening = async (e) => {
    setSelectedScreening(
      currentMovie.filter((screen) => screen.startTime === e.target.value)
    );
  };

//  const setActiveHandler = (seatNumber) =>{
//    setActive(!isActive)
//  } 
  

 
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
            <Chair row ={row} seat={seat} key={seats[row][seat].id} reserved={true}/>
          );
        } else {
          // 
          cinemaMatrix.push(

            <Chair 
            row ={row} seat={seat} 
            key={seats[row][seat].id}
            isChosen={isChosen} 
            // delegation
            // clickHandler={() => setActiveHandler([row, seat])}
            />
          );
        }
      }
    }
    return <div className="container">
      {cinemaMatrix}</div>;
    } else {<h2>...loading</h2>}
    

  }

  const renderScreenings = () => (
    <>
    <h1>OrderPage</h1>
      <Row>
        <Col md={4}> <h3>{currentMovie[0].movieId.title}</h3></Col>
        <Col>
          <select onChange={(e) => getSelectedScreening(e)}>
            {currentMovie.map((time) => (
              <option key={time.startTime} value={time.startTime}>
                {new Date(time.startTime).toLocaleString("sv-SE").slice(0, 16)}
              </option>
            ))}
          </select>
        </Col>
      </Row>
      {/* <h5>{selectedScreening[0].auditoriumName}</h5> */}
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
      
        {currentMovie && renderScreenings()}
    </div>
  );
}
