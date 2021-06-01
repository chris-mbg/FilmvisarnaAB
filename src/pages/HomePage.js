import MovieWrapper from '../components/MovieWrapper';
import ImgCarousel from '../components/ImgCarousel';
import MovieCard from '../components/MovieCard';

const HomePage = () => {
  return (
    <div className='homePage'>
      <ImgCarousel />
      <MovieWrapper />
    </div>
  );
};

export default HomePage;
