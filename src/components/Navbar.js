import React, { useContext } from "react";
import styles from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../contexts/UserContext";

function Navbar1() {
  // Import variable from UserContext here...
  const { loggedInUser, logout } = useContext(UserContext);

  return (
    <Navbar className={styles.nav} collapseOnSelect expand="md" variant="dark">
      <Navbar.Brand as={Link} to="/">
        <span className={styles.font}>Filmvisarna</span>
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        className="justify-content-end"
        id="responsive-navbar-nav"
      >
        <Nav className={styles.nav_links}>
          <Nav.Link as={Link} to="/" className={styles.link}>
            START
          </Nav.Link>
          <Nav.Link as={Link} to="/about" className={styles.link}>
            OM OSS
          </Nav.Link>
          {loggedInUser ? (
            <Nav.Link as={Link} to="/profile" className={styles.link}>
              MIN PROFIL
            </Nav.Link>
          ) : (
            <Nav.Link as={Link} to="/registration" className={styles.link}>
              REGISTRERA
            </Nav.Link>
          )}
          {loggedInUser ? (
            <Nav.Link onClick={() => logout()} className={styles.link}>
              LOGGA UT
            </Nav.Link>
          ) : (
            <Nav.Link className={styles.link}>LOGGA IN</Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar1;
