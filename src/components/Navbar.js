import React, { useContext, useState } from "react";
import styles from "../css/Navbar.module.css";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { UserContext } from "../contexts/UserContext";
import Login from "../components/login/Login";
import { Modal } from "react-bootstrap";

function Navbar1() {
  const { loggedInUser, logout } = useContext(UserContext);

  // LoginModal
  const [showLogin, setShowLogin] = useState(false);

  //  Handlers for LoginModal
  const handleCloseLoginModal = () => setShowLogin(false);
  const handleShowLoginModal = () => setShowLogin(true);

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
            <Nav.Link onClick={handleShowLoginModal} className={styles.link}>
              LOGGA IN
            </Nav.Link>
          )}
        </Nav>
      </Navbar.Collapse>
      {/* Modal */}
      <Modal
        size={"md"}
        centered={true}
        show={showLogin}
        onHide={handleCloseLoginModal}
      >
        <Login setShowLogin={setShowLogin} />
      </Modal>
    </Navbar>
  );
}

export default Navbar1;
