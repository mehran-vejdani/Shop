import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";

import styles from "./productDetail.module.css";
import { Container } from "react-bootstrap";
//context
import { ProductsContext } from "../../context/ProductContextProvider";
const ProductDetails = () => {
  const { id } = useParams();
  const data = useContext(ProductsContext);
  const product = data[id - 1];
  return (
    <Container>
      <div className={styles.container}>
        <img src={product.image} alt="product" className={styles.imageSize} />
        <div className={styles.titles}>
          <h3>{product.title}</h3>
          <p>{product.description}</p>
          <p>
            <span>category</span>
            {product.category}
          </p>
          <div className={styles.footer}>
            <span className={styles.price}>{product.price} $</span>
            <Link to="/products" className={styles.link}>
              back to shop
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;
