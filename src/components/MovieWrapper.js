import MovieCard from './MovieCard'
import styles from '../css/MovieWrapper.module.css'

import React from 'react'

export default function MovieWrapper() {
  return (
    <div className={`${styles.wrapper} p-0 d-flex flex-wrap justify-content-around`}>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
    </div>
  )
}
