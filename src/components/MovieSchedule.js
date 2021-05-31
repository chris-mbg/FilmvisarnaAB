import React from "react";
import { Row, Col } from "react-bootstrap";

import styles from "../css/MovieSchedule.module.css";
import CustomButtom from "../components/CustomButton";

// props are accepted from the parent component. The layout is created depends on them with the help of a conditional rendering
export default function MovieSchedule({
  isHomePage,
  date,
  time,
  totalPlaces,
  reservedPlaces,
  auditorium,
  title
}) {
  return (

      <>
      <Row className={`${styles.scheduleItem} d-flex align-items-md-center`}>
        <Col
          sm={12}
          md={10}
          className={`${styles.detailWrapper} d-flex justify-content-between`}
        >
          {date && (
            <div className={styles.scheduleDetails}>
              <p>{date}</p>
            </div>
          )}

          <div className={isHomePage ? `col-2 ${styles.scheduleDetails}`: styles.scheduleDetails}>
            <p>{time}</p>
          </div>
          {totalPlaces ? (
            <div className={styles.scheduleDetails}>
              <p>
                <span>{totalPlaces - reservedPlaces}</span>
                {/* /<span>{totalPlaces}</span> */}
              </p>
            </div>
          ) : (
            <div className={isHomePage ? `col-8 ${styles.scheduleDetails}`: styles.scheduleDetails}>
              <p>{title}</p>
            </div>
          )}
          <div className={isHomePage ? ` ${styles.scheduleDetails}`: styles.scheduleDetails}>
            <p>{auditorium}</p>
          </div>
        </Col>
        <Col
          className={`${styles.btnWrapper} d-flex justify-content-end p-0 mt-3 mt-md-0`}
        >
          <CustomButtom text="Boka" />
        </Col>
      </Row>
      </>

  );
}
