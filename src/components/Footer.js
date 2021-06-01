import React from "react";
import styles from "../css/Footer.module.css";

const Footer = () => {
    return (
        <div className={styles.mainFooter}  >
                <div className="row">
                    <div className="col">
                        <ul className={styles.logo}>
                            <li>Filmvisarna</li>
                        </ul>

                    </div>
                    <div className="col">
                            <p className={styles.adresstext}>Adressgatan 11
                            123 45 Staden</p>
                    </div>
                    <div className="col">
                        <ul className={styles.socialIcon}>
                            <li className={`${styles.icon} fab fa-facebook-f`}></li>
                            <li className={`${styles.icon} fab fa-instagram`}></li>
                            <li className={`${styles.icon} fab fa-twitter`}></li>
                        </ul>

                    </div>
                </div>
                <div>
                    <p className={`${styles.copy}`}>
                    &copy;{new Date().getFullYear()}FILMVISARNA AB | Copyright | Vi använder cookies | Integritetspolicy
                    </p>
                </div>
        </div>

    )
}

export default Footer;