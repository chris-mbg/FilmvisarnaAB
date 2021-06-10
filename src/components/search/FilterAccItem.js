import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./styles/FilterWrapper.module.css"

const FilterAccItem = ({header, component=null}) => {

  const [toggleAcc, setToggleAcc] = useState(false);
  const icon = !toggleAcc ? (
    <i className={`fas fa-chevron-down`} />
  ) : (
    <i className={`fas fa-chevron-up`} />
  );

  return (
    <Accordion>
      <Accordion.Toggle as={"div"} eventKey="0" className={`${styles.accHeader}`} onClick={() => setToggleAcc(!toggleAcc)}>
        <Row noGutters={true}>
          <Col xs={2}>
            {icon}
          </Col>
          <Col xs={10}>
            <p>{header}</p>
          </Col>
        </Row>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          {component}
        </Accordion.Collapse>
    </Accordion>
  );
}

export default FilterAccItem;