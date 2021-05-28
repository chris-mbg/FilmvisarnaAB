import styles from "../../css/ReservationList.module.css";
import UserReservation from "./UserReservation";

const ReservationList = () => {
  // Import variable from "userContext/reservationContext" here...
  const user = [
    {
      _id: "60af662420b6bc3a286fca28",
      movie: {
        movieId: "60acb7942ec1e13448754a85",
        title: "Wonder Woman 1984",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        length: "152 min",
        genre: "Fantasy",
      },

      screening: {
        screeningId: "60acbc58b7b50656ccec8734",
        auditoriaName: "Lilla Salongen",
        startTime: "2021-05-28T13:00:00.000+00:00",
      },
      tickets: [
        {
          seatNumber: [
            [0, 1],
            [0, 2],
          ],
          ticketType: "adult",
        },
      ],
      totalPrice: 90,
      userId: "60adfee914aba06ce4f7e56a",
    },
    {
      _id: "60af662420b6bc3a286fca28",
      movie: {
        movieId: "60acb7942ec1e13448754a85",
        title: "Wonder Woman 1984",
        image:
          "https://m.media-amazon.com/images/M/MV5BMTYzODQzYjQtNTczNC00MzZhLTg1ZWYtZDUxYmQ3ZTY4NzA1XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
        length: "152 min",
        genre: "Fantasy",
      },

      screening: {
        screeningId: "60acbc58b7b50656ccec8734",
        auditoriaName: "Lilla Salongen",
        startTime: "2021-05-24T13:00:00.000+00:00",
      },
      tickets: [
        {
          seatNumber: [
            [1, 1],
            [1, 2],
          ],
          ticketType: "adult",
        },
      ],
      totalPrice: 90,
      userId: "60adfee914aba06ce4f7e56a",
    },
  ]; // Dummy data

  // Maps out user's reservation(s).
  const reservation = user.map((reservation, index) => {
    return <UserReservation reservation={reservation} />;
  });

  return (
    <div className={styles.listing_wrapper}>
      <h2 className={styles.title}>Bokade biljetter</h2>
      {/* <UserReservation /> */}
      {reservation}
    </div>
  );
};

export default ReservationList;
