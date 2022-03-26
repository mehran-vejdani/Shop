import React, { useContext } from "react";
import styles from "./product.module.css";
import { Container } from "react-bootstrap";
//context
import { ProductsContext } from "../../context/ProductContextProvider";
//component

import Products from "./Products";
const Store = () => {
  const products = useContext(ProductsContext);
  return (
    <Container>
      <div className={styles.cardFlex}>
        {products.map((product) => (
          <Products key={product.id} productData={product} />
        ))}
      </div>
    </Container>
  );
};

export default Store;
