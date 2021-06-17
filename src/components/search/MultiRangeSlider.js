import styles from "./styles/MultiRangeSlider.module.css";
import PropTypes from "prop-types"; // Built-in typechecking
import { useRef, useCallback, useEffect, useContext } from "react";
import { MovieContext } from "../../contexts/MovieContext";

const MultiRangeSlider = ({ min, max }) => {
  const { userRequest, setUserRequest } = useContext(MovieContext);
  // Set each prop as type number
  MultiRangeSlider.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  };

  // Refs
  const minValRef = useRef(userRequest.minLength || min);
  const maxValRef = useRef(userRequest.maxLength || max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to change from the left side
  useEffect(() => {
    const minPercent = getPercent(userRequest.minLength || min);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [userRequest.minLength, getPercent]);

  // Set width of the range to change from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(userRequest.maxLength || max);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [userRequest.maxLength, getPercent]);

  useEffect(() => {
    // To reset when search/filter object is cleared
    if (Object.keys(userRequest).length === 0) {
      console.log("In useEffect if-statement", maxValRef.current)
      range.current.style.width = "100%";
      range.current.style.left = "0%";
      maxValRef.current = max;
      minValRef.current = min;
    }
  }, [userRequest]);

  const handleMinChange = (e) => {
    const value = Math.min(
      Number(e.target.value),
      (userRequest.maxLength || max) - 1
    );
    //setMinVal(value);
    setUserRequest({ ...userRequest, minLength: value });
    minValRef.current = value;
  };

  const handleMaxChange = (e) => {
    const value = Math.max(
      Number(e.target.value),
      (userRequest.minLength || min) + 1
    );
    //setMaxVal(value);
    setUserRequest({ ...userRequest, maxLength: value });
    maxValRef.current = value;
  };

  return (
    <>
      <input
        type="range"
        min={min}
        max={max}
        value={userRequest.minLength || min}
        onChange={handleMinChange}
        className={`${styles.thumb} ${styles.thumbLeft}`}
        style={{ zIndex: (userRequest.minLength || min) > max - 100 && "5" }}
      />
      <input
        type="range"
        min={min}
        max={max}
        value={userRequest.maxLength || max}
        onChange={handleMaxChange}
        className={`${styles.thumb} ${styles.thumbRight}`}
      />
      <div className={`${styles.slider}`}>
        <div className={`${styles.sliderTrack}`} />
        <div ref={range} className={`${styles.sliderRange}`} />
        <div className={styles.sliderLeftValue}>
          {userRequest.minLength || min} min
        </div>
        <div className={styles.sliderRightValue}>
          {userRequest.maxLength || max} min
        </div>
      </div>
    </>
  );
};

export default MultiRangeSlider;
