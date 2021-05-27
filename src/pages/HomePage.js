import MovieWrapper from '../components/MovieWrapper'
import ImgCarousel from "../components/ImgCarousel"

const HomePage = () => {
  return (
    <div className="homePage">
      <MovieWrapper/>
      <ImgCarousel />
    </div>
  );
}

export default HomePage;