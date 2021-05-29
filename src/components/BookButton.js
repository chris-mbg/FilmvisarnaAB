import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { ReservationContext } from "../contexts/ReservationContext";
import CustomButton from "./CustomButton";

const BookButton = ({ movieId, movieTitle ,screeningId = null }) => {

  console.log("movieId", movieId);
  console.log("screeningId", screeningId);

  const { setMovieToShow, setScreeningToShow } = useContext(ReservationContext);
  const history = useHistory();

  const bookButtonClick = () => {
    setMovieToShow({movieId, movieTitle});
    if(screeningId) {
      setScreeningToShow(screeningId)
    }
    history.push("/order");
  }

  return (
    <div>
      <CustomButton text={"Boka"} clickHandler={bookButtonClick}/>
    </div>
  );
}

export default BookButton;