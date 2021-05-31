import styles from "../../css/ScreeningPicker.module.css";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { MovieContext } from "../../contexts/MovieContext";
import { ReservationContext } from "../../contexts/ReservationContext";
import moment from "moment";
import "moment/locale/sv";

const ScreeningPicker = () => {
  const [selectedScreening, setSelectedScreening] = useState("default");

  // Context
  const { getAllScreeningsForMovie, getMovieById } = useContext(MovieContext);
  const {
    movieOnOrderPage,
    setMovieOnOrderPage,
    movieScreenings,
    setMovieScreenings,
    setScreeningToShow,
  } = useContext(ReservationContext);

  // useParams
  const { movieId } = useParams();

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

  useEffect(() => {
    if (selectedScreening === "default") {
      setScreeningToShow(null);
    } else {
      setScreeningToShow(filterSelectedScreening());
    }
  }, [selectedScreening]);

  // Handlers
  const handleSelect = (e) => {
    setSelectedScreening(e.target.value);
  };

  // Filter
  const filterSelectedScreening = () => {
    return (
      movieScreenings &&
      movieScreenings.filter((screening) => {
        return screening._id === selectedScreening;
      })
    );
  };

  const renderScreenings =
    movieScreenings &&
    movieScreenings.map((screening, index) => {
      return (
        <option key={index} value={screening._id}>
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
