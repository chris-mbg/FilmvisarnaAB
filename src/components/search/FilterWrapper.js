import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from "./styles/FilterWrapper.module.css"
import { useState} from "react";
import FilterAccItem from './FilterAccItem';
import PriceOptions from './PriceOptions';
import LengthOptions from './LengthOptions';

const FilterWrapper = () => {
  // const filterOptions = require("../../utilities/filterOptions/filterOptions.json");


  const [toggleAccordion, setToggleAccordion] = useState(false);
  const icon = !toggleAccordion ? (
    <i className={`fas fa-chevron-down`} />
  ) : (
    <i className={`fas fa-chevron-up`} />
  );


  const filterAcc = () => {
    return(
      <Accordion className={`${styles.innerAcc}`}>
        <FilterAccItem header="Pris" component={<PriceOptions />} />
        <hr className={`${styles.lineBtwn}`}/>
        <FilterAccItem header="Längd på filmen" component={<LengthOptions />} />

        <Accordion.Toggle as={"div"} eventKey="2" className={`${styles.accHeader}`}>
          <p>Genre</p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="2">
          <p>Komponent för genre</p>
        </Accordion.Collapse>
        <Accordion.Toggle as={"div"} eventKey="3" className={`${styles.accHeader}`}>
          <p>Datum</p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="3">
          <p>Komponent för datum</p>
        </Accordion.Collapse>
        <Accordion.Toggle as={"div"} eventKey="4" className={`${styles.accHeader}`}>
          <p>Skådespelare</p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="4">
          <p>Komponent för actors</p>
        </Accordion.Collapse>
        <Accordion.Toggle as={"div"} eventKey="5" className={`${styles.accHeader}`}>
          <p>Regissör</p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="5">
          <p>Komponent för regissör</p>
        </Accordion.Collapse>
        <Accordion.Toggle as={"div"} eventKey="6" className={`${styles.accHeader}`}>
          <p>Språk</p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="6">
          <p>Komponent för Språk</p>
        </Accordion.Collapse>
        <Accordion.Toggle as={"div"} eventKey="7" className={`${styles.accHeader}`}>
          <p>Åldersgräns</p>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="7">
          <p>Komponent för Åldersgräns</p>
        </Accordion.Collapse>
      </Accordion>
    )
  }


  const getAccordion = () => {
    return (
      <div className="container mx-3 mt-3 mb-5 border-bottom ">
      <Accordion >
        <Accordion.Toggle as={"div"} eventKey="0" onClick={() => setToggleAccordion(!toggleAccordion)}>
          <Row noGutters={true}>
            <Col xs={10} sm={10} md={10} lg={10}>
              <p className="h4">Filter</p>
            </Col>
            <Col
              xs={2}
              sm={2}
              md={2}
              lg={2}
              className="d-flex justify-content-center align-items-center"
            >
              <div >
                {icon}
              </div>
            </Col>
          </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          {filterAcc()}
        </Accordion.Collapse>
      </Accordion>
    </div>
    )
  }

  const withoutAccordion = () => {
    return (
      <div className="mx-3 mt-3 mb-5">
          <Row noGutters={true}>
            <Col xs={10} sm={10} md={10} lg={10}>
              <p className="h4">Filter</p>
            </Col>
            {filterAcc()}
          </Row>
    </div>
    )
  }

  return (
    <div>
      <div className="d-lg-none">{getAccordion()}</div>
      <div className="d-none d-lg-block">{withoutAccordion()}</div>
    </div>
  );
};

export default FilterWrapper;

  // <div className="p-2 ml-4">
    //   <h2>Filter</h2>
    //
    //
    //   <p>Genre</p>
    //   <select>
    //     <option value="">Välj en genre</option>
    //     {filterOptions.movieGenres.map((genre, i) => (
    //       <option key={i} value={genre}>
    //         {genre}
    //       </option>
    //     ))}
    //   </select>
    //   <p>Datum</p>
    //   <input type="date" />
    //   <p>Skådespelare</p>
    //   <input type="text" />
    //   <p>Regissör</p>
    //   <input type="text" />
    //   <p>Språk</p>
    //   <select>
    //     <option>Hitta film efter språk</option>
    //     {filterOptions.movieLanguages.map((lang, i) => (
    //       <option key={i} value={lang}>
    //         {lang}
    //       </option>
    //     ))}
    //   </select>
    //   <p>Åldersgräns</p>
    //   {filterOptions.movieAgeLimits.map((limit, i) => (
    //     <div key={i}>
    //       <label for={limit}>{limit.slice()}</label>
    //       <input type="checkbox" value={limit} name={limit} />
    //     </div>
    //   ))}
    // </div>