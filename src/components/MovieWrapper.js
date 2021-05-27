import { useContext } from "react";
import MovieCard from "./MovieCard";
import styles from "../css/MovieWrapper.module.css";
import React from "react";
import { MovieContext } from "../contexts/MovieContext";

export default function MovieWrapper() {
  const { allMovies } = useContext(MovieContext);

  const renderCards = () => {
    if (allMovies) {
      return allMovies.map((movie, i) => {
        return <MovieCard key={i} movie={movie} />;
      });
    } else {
      // todo implement Spinner?
      return <p>...loading</p>;
    }
  };
  return (
    <div className={`${styles.wrapper} p-0 d-flex flex-wrap justify-content-around mx-auto`}>
      {renderCards()}
    </div>
  );
}
