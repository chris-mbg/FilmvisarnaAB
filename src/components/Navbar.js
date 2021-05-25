import React, {useState,} from "react";
import styles from "../css/Navbar.module.css";


function Navbar() {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <nav>
                <div className={styles.logo}>Filmvisarna</div>
                <ul 
                className={styles.nav_links} 
                style={{ transform: open ? "translateX(0px)" : ""}}
                >
                    <li>
                        <a>START</a>
                    </li>
                    <li>
                        <a>OM OSS</a>
                    </li>
                    <li>
                        <a>REGISTRERA</a>
                    </li>
                    <li>
                        <a>LOGGA IN</a>
                    </li>
                </ul>
                <i onClick={() => setOpen(!open)} class="fas fa-bars burger"></i>
            </nav>

        </div>
    )
}

export default Navbar
