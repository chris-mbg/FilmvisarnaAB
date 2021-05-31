import { useEffect } from "react";
import { useContext, useState } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import Chair from "./Chair";
// import { Row, Col } from "react-bootstrap";

const Auditorium = () => {
  const { screeningToShow, screeningIdOnOrderPage, seatsChosen } =
    useContext(ReservationContext);
  const [cinemaMatrix, setCinemaMatrix] = useState(null);

  const renderCinemaMatrix = () => {
    console.log("render matrix...");
    const cinemaMatrix = [];
    if (screeningToShow && screeningIdOnOrderPage) {
      const seats = screeningToShow[0].seats;

      for (let row = 0; row < seats.length; row++) {
        cinemaMatrix.push(<br key={row}></br>);
        for (let seat = 0; seat < seats[row].length; seat++) {
          // check for reserved places by values from db
          if (seats[row][seat] === 1) {
            cinemaMatrix.push(
              <Chair
                row={row}
                seat={seat}
                key={screeningToShow[0]._id + row + seat}
                reserved={true}
              />
            );
          } else {
            cinemaMatrix.push(
              <Chair
                reserved={false}
                row={row}
                seat={seat}
                key={screeningToShow[0]._id + row + seat}
              />
            );
          }
        }
      }
      return <div className="container">{cinemaMatrix}</div>;
    } else {
      return <h2>...loading</h2>;
    }
  };

  useEffect(() => setCinemaMatrix(renderCinemaMatrix()), [screeningToShow]);
  // const renderScreenings = () => (
  //   <>
  //     <Row>
  //       <Col md={4}> <h3>{currentMovie.title}</h3></Col>
  //       <Col>
  //         <select onChange={(e) => getscreeningToShow(e)}>
  //           {orderScreenings.map((time) => (
  //             <option key={time.startTime} value={time.startTime}>
  //               {new Date(time.startTime).toLocaleString("sv-SE").slice(0, 16)}
  //             </option>
  //           ))}
  //         </select>
  //       </Col>
  //     </Row>
  //           <h5>{screeningToShow && screeningToShow[0].auditoriumName}</h5>
  //     <Row>
  //       <Col md={8} className={styles.matrixWrapper}>
  //         {renderCinemaMatrix()}
  //       </Col>
  //     </Row>
  //   </>
  // );

  return (
    <div>
      {screeningToShow ? cinemaMatrix : <h2>Välj en tid</h2>}
      <p>Valda platser:</p>
      {seatsChosen && (
        <div>
          {seatsChosen.map((seatNr) => (
            <p>
              Rad: {seatNr[0]} Plats: {seatNr[1]}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Auditorium;
