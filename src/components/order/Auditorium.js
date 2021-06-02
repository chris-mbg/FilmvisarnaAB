import { useEffect } from "react";
import { useContext, useState } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";
import Chair from "./Chair";
// import { Row, Col } from "react-bootstrap";

const Auditorium = () => {
  const { screeningToShow, seatsChosen } = useContext(ReservationContext);
  const [auditorium, setAuditorium] = useState(null);

  const renderCinemaMatrix = () => {
    console.log("render matrix...");
    const cinemaMatrix = [];
    if (screeningToShow) {
      const seats = screeningToShow.seats;

      for (let row = 0; row < seats.length; row++) {
        cinemaMatrix.push(<br key={row}></br>);
        for (let seat = 0; seat < seats[row].length; seat++) {
          // check for reserved places by values from db
          if (seats[row][seat] === 1) {
            cinemaMatrix.push(
              <Chair
                row={row}
                seat={seat}
                key={screeningToShow._id + row + seat}
                reserved={true}
              />
            );
          } else {
            cinemaMatrix.push(
              <Chair
                reserved={false}
                row={row}
                seat={seat}
                key={screeningToShow._id + row + seat}
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

  useEffect(() => setAuditorium(renderCinemaMatrix()), [screeningToShow]);

  return (
    <div className="bg-light text-center mt-3">
      <span className="border-top border-dark"></span>
      {screeningToShow ? auditorium : null}
      {/* <p>Valda platser:</p>
      {seatsChosen && (
        <div>
          {seatsChosen.map((seatNr) => (
            <p>
              Rad: {seatNr[0]} Plats: {seatNr[1]}
            </p>
          ))}
        </div>
      )} */}
    </div>
  );
};

export default Auditorium;
