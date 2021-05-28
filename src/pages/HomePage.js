import MovieWrapper from '../components/MovieWrapper'
import ImgCarousel from "../components/ImgCarousel"

const HomePage = () => {
  return (
    <div className="homePage">
      <ImgCarousel />
      <MovieWrapper/>
    </div>
  );
}

export default HomePage;