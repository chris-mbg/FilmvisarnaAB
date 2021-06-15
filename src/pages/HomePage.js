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
        <Row /* noGutters={true} */ className="mx-3 mx-sm-4 mx-lg-auto">
          <Col
            xs={12}
            lg={12}
            xl={{offset: 0, span: 3}}
            className="p-1 my-2"
          >
            <FilterWrapper />
          </Col>
          <Col xs={12} lg={9} xl={9}>
            <MovieWrapper />
          </Col>
      </Row>

    </div>
  );
};

export default HomePage;
