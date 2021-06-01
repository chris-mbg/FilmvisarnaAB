import { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ReservationContext } from "../../contexts/ReservationContext";

const ScreeningPicker = () => {
  const history = useHistory();

  const {
    movieIdOnOrderPage,
    screeningIdOnOrderPage,
    setScreeningIdOnOrderPage,
    movieScreenings,
  } = useContext(ReservationContext);

  //useEffect(() => console.log(screeningToShow), [screeningToShow]);

  //const [selectedScreening, setSelectedScreening] = useState(screeningIdOnOrderPage || "");
  const [selectedScreening, setSelectedScreening] = useState("");
  useEffect(() => {
    if (screeningIdOnOrderPage !== null) {
      setSelectedScreening(screeningIdOnOrderPage);
    }
  }, [screeningIdOnOrderPage]);

  const handleSelectChange = (e) => {
    if (e.target.value === "") {
      setScreeningIdOnOrderPage(null);
    }
    history.push(`/order/${movieIdOnOrderPage}/${e.target.value}`);
    setSelectedScreening(e.target.value);
    //setScreeningIdOnOrderPage(e.target.value);
  };

  return (
    <div className="my-4 text-center">
      {movieScreenings && (
        <h1>Boka dina biljetter till {movieScreenings[0].movieId.title}</h1>
      )}
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
