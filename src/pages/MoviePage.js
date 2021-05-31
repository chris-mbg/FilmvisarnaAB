import {useContext, useEffect, useState} from 'react'
import BookButton from '../components/BookButton';
import { MovieContext } from '../contexts/MovieContext'

export default function MoviePage(props) {
  const { movieId } = props.match.params;
  const [movie, setMovie] = useState(null)
  const { getMovieById } = useContext(MovieContext)


  useEffect(async () => {
    let response = await getMovieById(movieId)
    setMovie(response)
    // todo delete after test
    console.log("movie", response);
  },[])

  return (
    <div>
      <h1>Movie page</h1>
      {movie && <BookButton movieId={movie._id} movieTitle={movie.title} />}
    </div>
  )
}
