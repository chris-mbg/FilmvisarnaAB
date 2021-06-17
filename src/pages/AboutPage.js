import React from "react";
import karta from "../assets/karta.jpg";
import styles from "../css/About.module.css";
import { Carousel } from "react-bootstrap";

const AboutPage = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className={styles.aboutContainer}
            src="https://media.istockphoto.com/photos/red-velvet-theater-curtain-picture-id915090126?k=6&m=915090126&s=170667a&w=0&h=rd1GLJhQotmUvs7qt2E0qaha2CrEkZBWAvuvFrxH0Mo="
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.aboutContainer}
            src="https://img.aws.la-croix.com/2017/12/01/1200896237/frequentation-salles-cinema-cesse-daugmenter-atteint-20112156-millions-dentrees_0_729_486.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            {/* <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className={styles.aboutContainer}
            src="https://www.vectracom.fr/wp-content/uploads/2018/11/700_FO59474791_a1dfd092f58a037e9ed227119296e100.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            {/* <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className={styles.upper_wrapper}>
        <h2 className={styles.textHeading}>Filmvisarna</h2>
        <p>
          ”They may take our lives, but they’ll never take our freedom!” – Mel
          Gibson. ”I’m also just a girl, standing in front of a boy, asking him
          to love her.” – Julia Roberts. ”My name is Maximus Decimus Meridius,
          commander of the Armies of the North, General of the Felix Legions and
          loyal servant to the true emperor, Marcus Aurelius. Father to a
          murdered son, husband to a murdered wife. And I will have my
          vengeance, in this life or the next.” – Russel Crowe. ”Just keep
          swimming” – Doris
        </p>
        <p>
          ”You is kind. You is smart. You is important.” – Viola Davis. ”You
          talkin’ to me? You talkin’ to me? You talkin’ to me? Well, who the
          hell else are you talkin’ to? You talkin’ to me? Well, I’m the only
          one here. Who the f–k do you think you’re talkin’ to?” – Robert De
          Niro. ”Say hello to my little friend” – Al Pacino. ”Keep your friends
          close, but you enemies closer” – Al Pacino. ”Don’t forget to fall in
          love with yourself first” – Sarah Jessica Parker. ”My mama always
          said, ´Life is like a box of chocolates; you never know what you’re
          gonna get” – Tom Hanks. ”The greatest trick the devil ever pulled was
          convincing the world he didn’t exist.” – Kevin Spacey.
        </p>
      </div>
      <h4 className={styles.h4}>Öppettider och kontaktuppgiter</h4>
      <div className={styles.low}>
        <div className={styles.days_wrapper}>
          <p>Måndag - Fredag</p>
          <p>kl: 9.00 - 20.00</p>
          <p>Lördag - söndag</p>
          <p>10.00 - 22.00</p>
        </div>
        <div>
          <p>Adressgatan 11, 123 45 Staden</p>
          <p>tel: 022 172 14 15</p>
          <p>Email: filmvisarna@filmvisarna.se</p>
        </div>
        
      </div>
      <div className={styles.karta}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2254.0901562567615!2d12.991935251582639!3d55.60044458041721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4653a15435423321%3A0xd5e40999ac88751f!2sMalm%C3%B6%20stadsbibliotek!5e0!3m2!1ssv!2sse!4v1623919995406!5m2!1ssv!2sse"
            width="50%"
            height="250"
            style={{border:0}}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
        </div>
    </div>
  );
};

export default AboutPage;
