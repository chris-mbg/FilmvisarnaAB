import { useContext, useState } from "react";
import { ReservationContext } from "../contexts/ReservationContext";

const ScreeningPicker = () => {
  const { movieOnOrderPage, screeningIdOnOrderPage, setScreeningIdOnOrderPage, screeningToShow, movieScreenings } =
    useContext(ReservationContext);

  console.log(screeningToShow)

  const [selectedScreening, setSelectedScreening] = useState(screeningIdOnOrderPage || null);

  const handleSelectChange = (e) => {
    setSelectedScreening(e.target.value)
  }

  return (
    <div>
      {movieOnOrderPage && <p>{movieOnOrderPage.movieTitle}</p>}
      {screeningIdOnOrderPage && <p>{screeningIdOnOrderPage}</p>}
      <select onChange={handleSelectChange} value={selectedScreening}>
        {movieScreenings &&
          movieScreenings.map((screen) => (
            <option key={screen._id} value={screen._id}>
              {screen.startTime.slice(0, 10)} {screen.startTime.slice(11, 16)}
            </option>
          ))}
      </select>
      {screeningToShow &&
        <div>
          {screeningToShow[0].movieId}
          {
            screeningToShow[0].seats.map((row, i) =>
            row.map((seat, index) => (
              <p key={index}>
                Rad: {i + 1} Nummer: {index + 1} Bokad: {seat ? "Ja" : "Nej"}
              </p>
            ))
          )
          }
        </div>
      }
    </div>
  );
};

export default ScreeningPicker;
