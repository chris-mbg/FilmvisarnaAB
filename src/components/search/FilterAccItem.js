import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
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
          <p>{header}</p>
          {icon}
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          {/* {component} */}
          <p>Comp goes here</p>
        </Accordion.Collapse>
    </Accordion>
  );
}

export default FilterAccItem;