import React from "react";
import map from "../assets/map.jpg";
import filmrulle from "../assets/filmrulle.jpg";
import styles from "../css/About.module.css";

const AboutPage = () => {
  return (
    <div className={`${styles.aboutContainer}`}>
      <div className={styles.upper_wrapper}>
        <div className={styles.filmrulle_wrapper}>
          <img className={styles.filmrulle_image} src={filmrulle} alt="filmrulle" />
        </div>

        <div className={styles.about_text_wrapper}>
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
      </div>
      {/* /.upper_wrapper */}

      <img className={styles.map} src={map} alt="map" />

      {/* <div className="row d-flex mb-2 mb-md-3"> */}
      <div className={styles.lower_wrapper}>
        <div className={styles.phonenumber_wrapper}>
          <p className={styles.number}>022 172 14 15</p>
        </div>

        <div className={styles.days_wrapper}>
        <div className={styles.MondayFriday}>
          <p className={styles.days}>Måndag - Fredag</p>
          <p className={styles.time}>9.00 - 20.00</p>
        </div>

        <div className={styles.MondayFriday}>
          <p className={styles.days}>Lördag - söndag</p>
          <p className={styles.time}>10.00 - 22.00</p>
        </div>
        </div>
        {/* /.days_wrapper */}
      </div>
      {/* /.lower_wrapper */}
    </div>
    // /.aboutContainer
  );
};

export default AboutPage;
