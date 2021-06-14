import React from "react";
import karta from "../assets/karta.jpg";
import styles from "../css/About.module.css";
import { Jumbotron } from "react-bootstrap";

const AboutPage = () => {
  return (
    
    <div >
      <Jumbotron className={`${styles.aboutContainer}`}>
        {/* <h1>Om Oss</h1> */}
      </Jumbotron>
      <div className={styles.upper_wrapper}>
          <h2 className={styles.textHeading}>Filmvisarna</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            veritatis cupiditate ipsa ducimus ex! Perspiciatis quisquam
            exercitationem debitis recusandae repellat magnam maxime sunt.
            Maxime consequuntur, at quidem eius rerum pariatur.
          </p>
          <p>
            Sed auctor tincidunt ante sit amet volutpat. Donec euismod nisl eu
            neque lacinia, at pellentesque turpis dictum. Proin a libero
            ultricies, faucibus dui at, consectetur enim. Nulla ullamcorper non
            mi vitae ullamcorper. Aliquam at sem nec quam gravida commodo id ac
            metus. Vestibulum ultricies tortor ut eros aliquam vehicula.
            Maecenas sed diam scelerisque, convallis justo et, faucibus leo.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nunc
            ligula, tristique eget ligula luctus, commodo euismod enim.
            Pellentesque lacinia enim vel mi varius viverra. Sed vestibulum
            nulla non aliquam tempor. Nulla a eleifend enim, in sodales nisl.
            Vivamus vel sodales quam.
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
            <p>tel: 022 172 14 15</p>
            <p>Email: filmvisarna@filmvisarna.se</p>
        </div>
        <img className={styles.karta} src={karta} alt="karta" />
      </div>
    </div>
  );
};

export default AboutPage;
