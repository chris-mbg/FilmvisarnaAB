import React from 'react';
import { Row, Col } from "react-bootstrap";

import styles from '../css/MovieSchedule.module.css';
import CustomButtom from '../components/CustomButton'

export default function MovieSchedule() {
  return (
    <div className={styles.scheduleWrapper}>
      <h2>Föreställningar</h2>
      <Row className={`${styles.schedileItem} d-flex align-items-md-center`}>
        <Col sm={12} md={10} className={`${styles.detailWrapper} d-flex justify-content-between`}>
          <div className={styles.scheduleDetails}>
            <h5>Datum</h5>
            <p>2021-05-19</p>
          </div>
          <div className={styles.scheduleDetails}>
            <h5>Tid</h5>
            <p>18:00</p>
          </div>
          <div className={styles.scheduleDetails}>
            <h5>Platser</h5>
            <p>6/30</p>
          </div>
          <div className={styles.scheduleDetails}>
            <h5 >Salong</h5>
            <p>1</p>
          </div>
        </Col>
        <Col className={`${styles.btnWrapper} d-flex justify-content-end p-0 mt-3 mt-md-0`}>
          <CustomButtom text="Boka"/>
      </Col>

      </Row>
      <Row className={`${styles.schedileItem} d-flex align-items-md-center`}>
        <Col sm={12} md={10} className={`${styles.detailWrapper} d-flex justify-content-between`}>
          <div className={styles.scheduleDetails}>
            <h5>Datum</h5>
            <p>2021-05-19</p>
          </div>
          <div className={styles.scheduleDetails}>
            <h5>Tid</h5>
            <p>18:00</p>
          </div>
          <div className={styles.scheduleDetails}>
            <h5>Platser</h5>
            <p>6/30</p>
          </div>
          <div className={styles.scheduleDetails}>
            <h5 >Salong</h5>
            <p>1</p>
          </div>
        </Col>
        <Col className={`${styles.btnWrapper} d-flex justify-content-end p-0 mt-3 mt-md-0`}>
          <CustomButtom text="Boka"/>
      </Col>

      </Row>
    </div>
  )
}   

// 