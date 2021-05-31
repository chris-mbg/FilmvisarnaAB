import styles from "../../css/ScreeningPicker.module.css";
import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { MovieContext } from "../../contexts/MovieContext";
import { ReservationContext } from "../../contexts/ReservationContext";
import moment from "moment";
import "moment/locale/sv";

const ScreeningPicker = () => {
  // Context
  const { getAllScreeningsForMovie, getMovieById } = useContext(MovieContext);
  const {
    movieOnOrderPage,
    setMovieOnOrderPage,
    movieScreenings,
    setMovieScreenings,
    setSelectedScreening,
  } = useContext(ReservationContext);

  // useParams
  const { movieId } = useParams();

  // Moment.js
  useEffect(() => {
    // Gets all screening for specific movie.
    getAllScreeningsForMovie(movieId).then((data) => {
      setMovieScreenings(data);
    });

    // Gets specific movie by id
    getMovieById(movieId).then((data) => {
      setMovieOnOrderPage(data);
    });
  }, []);

  // Handlers
  const handleSelect = (e) => {
    setSelectedScreening(e.target.value);
  };

  const renderScreenings =
    movieScreenings &&
    movieScreenings.map((screening) => {
      return (
        <option key={screening.startTime} value={screening.startTime}>
          {moment(screening.startTime).format("LLL")}
        </option>
      );
    });

  return (
    <div className={styles.screening_picker_wrapper}>
      <Row>
        <Col lg={3}>{movieOnOrderPage && movieOnOrderPage.title}</Col>
        <Col lg={9}>
          <select onChange={(e) => handleSelect(e)}>
            <option key="default" value="default">
              Välj din visning
            </option>
            {renderScreenings}
          </select>
        </Col>
      </Row>
      <Row className="my-2">
        <Col>{movieScreenings && movieScreenings[0].auditoriumName}</Col>
      </Row>
    </div>
  );
};

export default ScreeningPicker;
