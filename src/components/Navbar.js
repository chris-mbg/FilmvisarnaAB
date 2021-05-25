import React  from "react";
import styles from "../css/Navbar.module.css";
import { Navbar, Nav } from "react-bootstrap";



function Navbar1() {
    // const [open, setOpen] = useState(false);
    return (
        <Navbar className={styles.nav} collapseOnSelect expand="lg" bg="pink" variant="dark">
            
            <Navbar.Brand className={styles.font} href="#home">Filmvisarna</Navbar.Brand>
           
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                
                <Nav >
                    <Nav.Link href="#start">START</Nav.Link>
                    <Nav.Link href="#omoss">OM OSS</Nav.Link>
                    <Nav.Link href="#registrera">REGISTRERA</Nav.Link>
                    <Nav.Link href="#loggain">LOGGA IN</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar1
