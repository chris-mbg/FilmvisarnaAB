import Accordion from "react-bootstrap/Accordion";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "./styles/FilterWrapper.module.css";
import { useContext, useState } from "react";
import FilterAccItem from "./FilterAccItem";
import OptionsSelect from "./OptionsSelect";
import LengthOptions from "./LengthOptions";
import DateOptions from "./DateOptions";
import TextInput from "./TextInput";
import AgeLimitOptions from "./AgeLimitOptions";
import { MovieContext } from "../../contexts/MovieContext";

const FilterWrapper = () => {
  const { setUserRequest } = useContext(MovieContext);

  const [toggleAccordion, setToggleAccordion] = useState(false);
  const icon = !toggleAccordion ? (
    <i className={`fas fa-chevron-down`} />
  ) : (
    <i className={`fas fa-chevron-up`} />
  );

  const filters = () => {
    return (
      <div>
        <FilterAccItem
          header="Pris"
          component={<OptionsSelect selectType={"price"} />}
        />
        <hr className={`${styles.lineBtwn}`} />
        <FilterAccItem header="Längd på filmen" component={<LengthOptions />} />
        <hr className={`${styles.lineBtwn}`} />
        <FilterAccItem
          header="Genre"
          component={<OptionsSelect selectType={"genre"} />}
        />
        <hr className={`${styles.lineBtwn}`} />
        <FilterAccItem header="Datum" component={<DateOptions />} />
        <hr className={`${styles.lineBtwn}`} />
        <FilterAccItem
          header="Skådespelare"
          component={<TextInput inputType={"actor"} />}
        />
        <hr className={`${styles.lineBtwn}`} />
        <FilterAccItem
          header="Regissör"
          component={<TextInput inputType={"director"} />}
        />
        <hr className={`${styles.lineBtwn}`} />
        <FilterAccItem
          header="Språk"
          component={<OptionsSelect selectType={"language"} />}
        />
        <hr className={`${styles.lineBtwn}`} />
        <FilterAccItem header="Åldersgräns" component={<AgeLimitOptions />} />
        <hr className={`${styles.lineBtwn}`} />
        <div className="d-flex justify-content-end mt-3">
          <button onClick={() => setUserRequest({})} className="resetButton">
            Rensa
          </button>
        </div>
      </div>
    );
  };

  const getAccordion = () => {
    return (
      <div className="container mx-auto mt-3 mb-5">
        <Accordion>
          <Accordion.Toggle
            as={"div"}
            eventKey="0"
            onClick={() => setToggleAccordion(!toggleAccordion)}
          >
            <Row noGutters={true}>
              <Col xs={11}>
                <p className={`h4`}>Filtrera</p>
              </Col>
              <Col
                xs={1}
                // sm={2}
                // md={2}
                // lg={2}
                className="d-flex justify-content-center align-items-center"
              >
                <div>{icon}</div>
              </Col>
            </Row>
          </Accordion.Toggle>
          <Accordion.Collapse eventKey="0">{filters()}</Accordion.Collapse>
        </Accordion>
      </div>
    );
  };

  const withoutAccordion = () => {
    return (
      <div className="ml-3 mt-3 mb-5 pt-lg-2">
        <Row noGutters={true}>
          <Col xs={10} sm={10} md={10} lg={10}>
            <p className={`h4 ${styles.filterHeading}`}>Filtrera</p>
          </Col>
          {filters()}
        </Row>
      </div>
    );
  };

  return (
    <div>
      <div className="d-lg-none">{getAccordion()}</div>
      <div className="d-none d-lg-block">{withoutAccordion()}</div>
    </div>
  );
};

export default FilterWrapper;
