import React, { useEffect, useState, useContext } from "react";
import { MovieContext } from "../contexts/MovieContext";
import MovieWrapper from "../components/MovieWrapper";
import ImgCarousel from "../components/ImgCarousel";
import MovieSchedule from "../components/MovieSchedule";
import styles from "../css/HomePage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomePage = () => {
  const { getScreeningsForMovie } = useContext(MovieContext);
  const [screenings, setScreening] = useState(null);

  useEffect(async () => {
    let schedule = await getScreeningsForMovie();
    setScreening(schedule);
  }, []);

  return (
    <div className="homePage">
      {/* Search bar component goes here */}
      <Row>
        <Col xs={0}>{/* Filter component goes here */}</Col>
        <Col xs={12}>
          <MovieWrapper />
        </Col>
      </Row>

      {/* "Visas idag" goes here */}
      <div className={styles.scheduleWrapper}>
        <h2>Visas idag</h2>
        {screenings &&
          screenings.map((movieScreen) => (
            <MovieSchedule
              time={movieScreen.startTime.toLocaleString("sv-SE").slice(11, 16)}
              title={movieScreen.movieId.title}
              auditorium={movieScreen.auditoriumName}
              isHomePage={true}
            />
          ))}
      </div>
    </div>
  );
};

export default HomePage;
