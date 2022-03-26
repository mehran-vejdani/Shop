import React from "react";
//add material
import styles from "./product.module.css";
import { Container, Card } from "react-bootstrap";
//end material
const Product = () => {
  return (
    <div>
      <Container>
        <div className={styles.cardFlex}>
          <Card className={styles.card}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <button variant="primary">Go somewhere</button>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </div>
  );
};

export default Product;
