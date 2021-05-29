import React from "react";
import styles from "./Chair.module.css";

export default function chair({reserved, row, seat}) {
 
  return (
    <>
      <div
        className={
          reserved
            ? `${styles.chairItem}  ${styles.reserved}`
            : `${styles.chairItem}`
        }
      >
        <span className={styles.tooltip}>
          row: <strong>{row + 1}</strong>
          chair: <strong>{seat + 1} </strong>
        </span>
      </div>
    </>
  );
}
