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

  const screeningId = "60acbc58b7b50656ccec87b5" // 6 juli kl 15.00


  return (
    <div>
      <h1>Movie page</h1>
      {movie && <BookButton movieId={movie._id} movieTitle={movie.title} screeningId={screeningId} />}
    </div>
  )
}
