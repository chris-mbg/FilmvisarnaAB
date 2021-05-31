import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ReservationContext } from "../contexts/ReservationContext";

const ScreeningPicker = () => {
  const history = useHistory();

  const { movieIdOnOrderPage, screeningIdOnOrderPage, movieScreenings } =
    useContext(ReservationContext);

  //useEffect(() => console.log(screeningToShow), [screeningToShow]);

  const [selectedScreening, setSelectedScreening] = useState(screeningIdOnOrderPage || "");

  const handleSelectChange = (e) => {
    history.push(`/order/${movieIdOnOrderPage}/${e.target.value}`)
    setSelectedScreening(e.target.value);
    //setScreeningIdOnOrderPage(e.target.value);
  };

  return (
    <div>
      {movieIdOnOrderPage && <p>Movie Id: {movieIdOnOrderPage}</p>}
      {screeningIdOnOrderPage && <p>Screening Id: {screeningIdOnOrderPage}</p>}
      <select onChange={handleSelectChange} value={selectedScreening}>
        <option value="">Välj en tid</option>
        {movieScreenings &&
          movieScreenings.map((screen) => (
            <option key={screen._id} value={screen._id}>
              {screen.startTime.toLocaleString()}
            </option>
          ))}
      </select>
    </div>
  );
};

export default ScreeningPicker;
