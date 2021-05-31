import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";

const Tickets = () => {
  const {screeningToShow, seatsChosen } = useContext(ReservationContext);

  return (
    <>
      {seatsChosen.length > 0 && screeningToShow && (
        <div>
          <p>Valda platser till {screeningToShow[0].movieId.title} {screeningToShow[0].startTime.toLocaleString().slice(0,16)} </p>
          {seatsChosen.map((seatNr) => (
            <p key={screeningToShow[0]._id + seatNr[0] + seatNr[1]}>
              <span>Rad: {seatNr[0]} Plats: {seatNr[1]}</span>
              {" "} <span>Biljettyp: Vuxen</span>
            </p>
          ))}
        </div>
      )}
    </>
  );
}

export default Tickets;