import MovieWrapper from '../components/MovieWrapper'
import ImgCarousel from "../components/ImgCarousel"
import MovieSchedule from "../components/MovieSchedule"

const HomePage = () => {
  return (
    <div className="homePage">
      <ImgCarousel />
      <MovieWrapper/>
      <MovieSchedule 
      time={"19.00"}
      title={"Hello Dolly"}
      auditorium={1}/>
    </div>
  );
}

export default HomePage;