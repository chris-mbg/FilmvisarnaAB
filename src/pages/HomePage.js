import MovieWrapper from "../components/MovieWrapper";
import ImgCarousel from "../components/ImgCarousel";
import MovieSchedule from "../components/MovieSchedule";
import styles from "../css/HomePage.module.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FilterWrapper from "../components/search/FilterWrapper";

const HomePage = () => {
  return (
    <div className="homePage">
      <ImgCarousel />
      <Row className="mt-4" noGutters={true}>
        <Col xs={12}>
          {/* Searchbar component goes here */}
        </Col>
        </Row>
        <Row noGutters={true} className="mx-3 mx-sm-4 mx-lg-auto">
          <Col
            xs={12}
            lg={{offset: 1, span: 10}}
            xl={{offset: 2, span: 8}}
            className="p-1 my-2"
          >
            <FilterWrapper />
          </Col>

          <Col xs={12} lg={12} xl={12}>
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
