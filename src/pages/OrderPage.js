import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { MovieContext } from "../contexts/MovieContext";

// For this page is necessarily (otherwise page not be loaded) to click the "BOOK" button, Because screening id  is needed for to find  the desired movie !!!!!
export default function OrderPage() {
  const {
    getMovieById,
    orderScreenings,
  } = useContext(MovieContext);

// to render information about the current movie
  const [currentMovie, setCurremtMovie] = useState(null);
// for rendering a matrix of seats in a particular auditorium (dynamically changes, depending on input select)
  const [selectedScreening, setSelectedScreening] = useState(null)

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
    setSelectedScreening(orderScreenings.filter(screen => screen.startTime === e.target.value))
  }

  const renderScreenings = () => (
    <Row>
    <Col>{currentMovie.title}</Col>
    <Col>
      <select  onChange={(e) => getSelectedScreening(e)}>
        {orderScreenings.map((time) => (
          <option 
          key={time.startTime} 
          value={time.startTime} 
        >
            {new Date (time.startTime).toLocaleString('sv-SE')}
          </option>
        ))}
      </select>
    </Col>
  </Row>

  )
  

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
