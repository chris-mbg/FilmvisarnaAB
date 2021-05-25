import MovieCard from './MovieCard'


import React from 'react'

export default function MovieWrapper() {
  return (
    <div style={{maxWidth: "880px"}} className="p-0 d-flex flex-wrap justify-content-around">
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
      <MovieCard/>
    </div>
  )
}
