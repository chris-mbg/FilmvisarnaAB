import { useContext } from "react";
import { ReservationContext } from "../../contexts/ReservationContext";

const Tickets = () => {
  const {screeningToShow, seatsChosen } = useContext(ReservationContext);

  return (
    <>
      {seatsChosen.length > 0 && screeningToShow && (
        <div className="border border-light my-2 p-4">
          <p>Valda platser till {screeningToShow[0].movieId.title} {screeningToShow[0].startTime.toLocaleString().slice(0,16)} </p>
          {seatsChosen.map((seatNr) => (
            <p key={screeningToShow[0]._id + seatNr[0] + seatNr[1]}>
              <span>Rad: {seatNr[0]} Plats: {seatNr[1]}</span>
              {" "} <span>Biljettyp: Vuxen</span> {" "} <span>Pris: {screeningToShow[0].price} kr</span>
            </p>
          ))}
          <p className="text-right">Totalt pris: {seatsChosen.length * screeningToShow[0].price} kr</p>
        </div>
      )}
    </>
  );
}

export default Tickets;