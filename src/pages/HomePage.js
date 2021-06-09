import MovieWrapper from "../components/MovieWrapper";
import ImgCarousel from "../components/ImgCarousel";
import MovieSchedule from "../components/MovieSchedule";
import styles from "../css/HomePage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Filters from "../components/Filters";

const HomePage = () => {
  return (
    <div className="homePage">
      <ImgCarousel />
      <Row className="mt-4" noGutters={true}>
        <Col xs={12} sm={12} md={12} lg={9} xl={8}>
          {/* Searchbar component placeholder */}
          <input type="text" placeholder="Sök..." style={{ width: "100%" }} />
        </Col>
        <Col
          xs={12}
          lg={{ order: "first", span: 3 }}
          xl={{ order: "first", span: 4 }}
        >
          <Filters />
        </Col>
        <Col xs={12} lg={{ span: 9, offset: 3 }} xl={{ span: 8, offset: 4 }}>
          <MovieWrapper />
        </Col>
      </Row>

      {/* "Visas idag" goes here */}
      {/* <div className={styles.scheduleWrapper}>
        <h2>Visas idag</h2>
      <MovieSchedule
      time={"19.00"}
      title={"Guardians of the Galaxy Vol. 2"}
      auditorium={"Stora salongen"}
      isHomePage={true}
     />
     <MovieSchedule
      time={"19.00"}
      title={"The Fast and the Furious"}
      auditorium={"Lilla salongen"}
      isHomePage={true}
     />
      </div> */}
    </div>
  );
};

export default HomePage;
