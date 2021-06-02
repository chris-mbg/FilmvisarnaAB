import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../contexts/MovieContext";
import { Row, Col, Image } from "react-bootstrap";
import styles from "../css/MoviePage.module.css";
import MovieSchedule from "../components/MovieSchedule";

export default function MoviePage(props) {
  const { movieId } = props.match.params;
  const [movie, setMovie] = useState(null);
  const [screenings, setScreening] = useState(null);

  const { getMovieById, getAllScreeningsForMovie } = useContext(MovieContext);

  useEffect(() => {
    async function getMovieAndScreenings() {
      let response = await getMovieById(movieId);
      setMovie(response);

      let schedule = await getAllScreeningsForMovie(response._id);
      setScreening(schedule);
    }
    getMovieAndScreenings();
  }, []);

  /*
   **{params} = multidimensional array
   **{return} = number or string
   */
  const getReservedPlaces = (seats) => {
    //  flat() returns a new array in which all the elements of the nested subarrays have been recursively "hoisted", then added values together ( 0 + 0 + 1 + 0 + ...)
    let reservedPlaces = seats
      .flat()
      .reduce((accumulator, currentValue) => accumulator + currentValue);
    return reservedPlaces ? reservedPlaces : "0";
  };

  // todo connect trailer
  // const seeTrailer = () => {
  //   console.log("this is a wonderful trailer...");
  // };

  const renderMovieDescription = () => (
    <section className={styles.movieContainer}>
      <Row className="text-center">
        <Col sm={12} md={6} lg={5}>
          <Image src={movie.image} fluid />
        </Col>
        <Col sm={12} md={6} lg={7}>
          <div className=" row flex-column-reverse flex-md-row">
            <div className={styles.description}>
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
              <hr></hr>
              <p>
                Åldersgräns: {movie.ageLimit.slice(3, movie.ageLimit.length)} år
              </p>
              <p>Direktör: {movie.director} </p>
              <p>
                Skådespelare:{" "}
                {movie.actors.map((actor, index) => (
                  <span key={index}>{actor} &#183; </span>
                ))}
              </p>
              <p>Språk: {movie.language}</p>
              <p>
                Produktionsår: {movie.productionYear}
                {/* {movie.productionCountries.map((country) => (
                  <span>{country}</span>
                ))} */}
              </p>
              <p>
                {" "}
                Längd: <span>{movie.length}</span>
                {/* Sammanfattning: <span>{movie.productionYear}</span>
                &#183;<span>{movie.length}</span> */}
              </p>
              <p>
                Genre:{""} {movie.genre}
              </p>
            </div>
            {/* Needed when possibility to see trailer is implemented! */}
            {/* <CustomButton
              text="Trailer"
              className="order-md-last"
              clickHandler={seeTrailer}
            /> */}
          </div>
        </Col>
      </Row>
    </section>
  );

  return (
    <div className="container pb-3">
      {movie ? renderMovieDescription() : <h2>...loading</h2>}
      {screenings ? (
        <div className={styles.scheduleWrapper}>
          <h2>Föreställningar</h2>
          <Row
            className={`${styles.scheduleItem} d-flex align-items-md-center`}
          >
            <Col sm={3} md={3} className={`${styles.detailWrapper}`}>
              <div className={`${styles.scheduleDetails}`}>
                <h5>Datum</h5>
              </div>
            </Col>
            <Col sm={2} md={2} >
              <div className={`${styles.scheduleDetails}`}>
                <h5>Tid</h5>
              </div>
            </Col>
            <Col sm={3} md={3} >
              <div className={`${styles.scheduleDetails}`}>
                <h5>Platser kvar</h5>
              </div>
            </Col>
            <Col sm={3} md={3} >
              <div className={`${styles.scheduleDetails}`}>
                <h5>Salong</h5>
              </div>
            </Col>
          </Row>
          {screenings.map((screen) => (
            <MovieSchedule
              isMoviePage={true}
              date={screen.startTime.toLocaleString("sv-SE").slice(0, 11)}
              time={screen.startTime.toLocaleString("sv-SE").slice(11, 16)}
              // flat() returns a new array in which all the elements of the nested subarrays have been recursively "hoisted"
              totalPlaces={screen.seats.flat(Infinity).length}
              reservedPlaces={getReservedPlaces(screen.seats)}
              auditorium={screen.auditoriumName}
              screeningId={screen._id}
              movieId={movieId}
            />
          ))}
        </div>
      ) : (
        <h2>...loading</h2>
      )}
    </div>
  );
}
