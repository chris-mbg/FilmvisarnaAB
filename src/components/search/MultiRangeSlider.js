import styles from "./styles/MultiRangeSlider.module.css"
import PropTypes from "prop-types"; // Built-in typechecking
import { useState, useRef, useCallback, useEffect } from "react";


const MultiRangeSlider = ({ min, max }) => {
  // Set each prop as type number
  MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired
  };

  // Creating the state variables
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);

  // Creating the refs
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(value => Math.round(((value - min) / (max - min)) * 100), [min, max]);

  // Set width of the range to change from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to change from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  const handleMinChange = e => {
      const value = Math.min(Number(e.target.value), maxVal - 1);
      setMinVal(value);
      minValRef.current = value;
  };

  const handleMaxChange = e => {
    const value = Math.max(Number(e.target.value), minVal + 1);
    setMaxVal(value);
    maxValRef.current = value;
 };

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={minVal}
        onChange={handleMinChange}
        className={`${styles.thumb} ${styles.thumbLeft}`}
        style={{ zIndex: minVal > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={maxVal}
        onChange={handleMaxChange}
        className={`${styles.thumb} ${styles.thumbRight}`}
      />
      <div className={`${styles.slider}`}>
        <div className={`${styles.sliderTrack}`} />
        <div ref={range} className={`${styles.sliderRange}`} />
        <div className={styles.sliderLeftValue}>{minVal} min</div>
        <div className={styles.sliderRightValue}>{maxVal} min</div>
      </div>
    </>
  );
}

export default MultiRangeSlider;