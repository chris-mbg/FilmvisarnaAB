import React from "react";
import styles from "./Chair.module.css";

export default function chair({reserved, row, seat, clickHandler, isActive}) {
  

  return (
    <>
      <div 
        className={ `${styles.chairItem} 
        ${reserved
          ? styles.reserved
          : isActive && styles.active}`
        }
        onClick={clickHandler}
      >
        <span className={styles.tooltip}>
          row: <strong>{row + 1}</strong>
          chair: <strong>{seat + 1} </strong>
        </span>
      </div>
    </>
  );
}
