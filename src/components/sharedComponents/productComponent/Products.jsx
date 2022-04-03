import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//context

//add material
import styles from "./product.module.css";
import { Container, Card, Spinner } from "react-bootstrap";
//end material
//functions
import { shorten } from "../../helper/functions";
const Products = ({ productData }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => setLoading(true));
  return (
    <div>
      <Container>
        {loading ? (
          <div className={styles.flexibility}>
            <Card className={styles.card}>
              <Card.Img
                variant="top"
                src={productData.image}
                alt="product"
                className={styles.cardImage}
              />
              <Card.Body>
                <Card.Text>{shorten(productData.title)}</Card.Text>
                <p>{productData.price}$</p>
                <Link to={`/products/${productData.id}`}>Details</Link>
              </Card.Body>

              <div>
                <button className="primary">Go somewhere</button>
              </div>
            </Card>
          </div>
        ) : (
          <div className={styles.spinner}>
            <Spinner animation="border" variant="primary" />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Products;
