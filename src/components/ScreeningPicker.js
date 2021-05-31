import { useEffect } from "react";
import { useContext, useState } from "react";
import { ReservationContext } from "../contexts/ReservationContext";

const ScreeningPicker = () => {
  const { movieOnOrderPage, screeningIdOnOrderPage, setScreeningIdOnOrderPage, screeningToShow, movieScreenings } =
    useContext(ReservationContext);

  useEffect(() => console.log(screeningToShow), [screeningToShow]);

  const [selectedScreening, setSelectedScreening] = useState(screeningIdOnOrderPage || "");

  const handleSelectChange = (e) => {
    setSelectedScreening(e.target.value);
    setScreeningIdOnOrderPage(e.target.value);
  };

  return (
    <div>
      {movieOnOrderPage && <p>{movieOnOrderPage.movieTitle}</p>}
      {screeningIdOnOrderPage && <p>{screeningIdOnOrderPage}</p>}
      <select onChange={handleSelectChange} value={selectedScreening}>
        <option value="">Välj en tid</option>
        {movieScreenings &&
          movieScreenings.map((screen) => (
            <option key={screen._id} value={screen._id}>
              {screen.startTime.toLocaleString()}
            </option>
          ))}
      </select>
      {screeningToShow && screeningToShow.length > 0 &&
        <div>
          {screeningToShow[0].movieId}
          <p>Ska visas för grafisk komponent: </p>
          {
            screeningToShow[0].seats.map((row, i) =>
            row.map((seat, index) => (
              <span key={index}>
                Rad: {i + 1} Nummer: {index + 1} Bokad: {seat ? "Ja" : "Nej"} |
              </span>
            ))
          )
          }
        </div>
      }
    </div>
  );
};

export default ScreeningPicker;
