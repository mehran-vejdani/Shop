import React, { useContext } from "react";
import { Link } from "react-router-dom";

//add material
import styles from "./nav.module.css";
import { Navbar, Container } from "react-bootstrap";
import shop from "../assets/icons/shopping.svg";
//end material
//Context
import { CartContext } from "../context/CartContextProvider";
const NavbarComponent = () => {
  const { state } = useContext(CartContext);
  return (
    <Navbar bg="light" expand="lg" className={styles.navPosition}>
      <Container>
        <Link to="/products" className={styles.link}>
          products
        </Link>
        <div>
          <Link to="/Cart">
            {" "}
            <img src={shop} alt="shopIcon" className={styles.shopIcon} />
          </Link>

          <span className={styles.shopCount}>{state.itemsCounter}</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
