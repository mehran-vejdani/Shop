import React from "react";
import { Link } from "react-router-dom";

//add material
import styles from "./nav.module.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import shop from "../assets/icons/shopping.svg";
//end material
const NavbarComponent = () => {
  return (
    <Navbar bg="light" expand="lg" className={styles.navPosition}>
      <Container>
        <Link to="/products" className={styles.link}>
          products
        </Link>
        <div>
          <img src={shop} alt="shopIcon" className={styles.shopIcon} />
          <span className={styles.shopCount}>0</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
