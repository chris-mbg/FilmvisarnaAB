import Carousel from "react-bootstrap/Carousel";
import styles from "../css/ImgCarousel.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ImgCarousel = () => {
  const [moviePics, setMoviePics] = useState([]);

  useEffect(() => setMoviePics(require("../assets/caroPics.json")), []);

  return (
    <div className={`container border border-danger ${styles.restrictions}`}>
      <Carousel>
        <Carousel.Item>
          <img
            className={`d-block ${styles.caroImg}`}
            src="https://images.unsplash.com/photo-1514306191717-452ec28c7814?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80"
            alt="First slide"
          />
          <Carousel.Caption>
            <h2 className={`${styles.captionText} ${styles.welcomeText}`}>Filmvisarna</h2>
            <br />
            <p className={`${styles.captionText} ${styles.welcomeText}`}>Bara bra film.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {moviePics.map((obj, index) => (
          <Carousel.Item key={index}>
            <Link to={`/movie/${obj.DBId}`}>
              <img
                className={`d-block ${styles.caroImg}`}
                src={obj.imgLink}
                alt={`From the movie ${obj.title}`}
              />
              <Carousel.Caption>
                <h3 className={`${styles.captionText}`}>{obj.title}</h3>
                <br />
                <h3 className={`${styles.captionText}`}>Visas nu!</h3>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
        {/* <Carousel.Item>
          <img
            className={`d-block ${styles.caroImg}`}
            src="https://media.comicbook.com/2020/06/gladiator-movie-russell-crowe-tiger-2000-1224285.jpeg?auto=webp&width=1200&height=628&crop=1200:628,smart"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Visas nu!</h3>
            <p>Läs mer om filmen här</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block ${styles.caroImg}`}
            src="http://2.bp.blogspot.com/-uZUMCsz_H4M/TWaqInlGSmI/AAAAAAAABbc/2Xbu9kylMrQ/s1600/Inception-Widescreen-Wallpaper-1920x1200-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={`d-block ${styles.caroImg}`}
            src="https://4kwallpapers.com/images/wallpapers/wonder-woman-1984-gal-gadot-2020-movies-5k-3840x2160-3755.jpg"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>*/}
      </Carousel>
    </div>
  );
};

export default ImgCarousel;
