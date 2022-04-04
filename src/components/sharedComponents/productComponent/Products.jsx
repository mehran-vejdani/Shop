import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
//functions
import { shorten, isIncart, quantityCount } from "../../helper/functions";
//add material
import styles from "./product.module.css";
import { Container, Card, Spinner } from "react-bootstrap";
import trash from "../../assets/icons/trash.svg";
//end material

//context
import { CartContext } from "../../context/CartContextProvider";
const Products = ({ productData }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => setLoading(true), []);
  const { state, dispatch } = useContext(CartContext);
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

              <div className={styles.btnGroup}>
                {isIncart(state, productData.id) ? (
                  <button
                    onClick={() =>
                      dispatch({ type: "INCREASE", payload: productData })
                    }
                  >
                    +
                  </button>
                ) : (
                  <button
                    onClick={() =>
                      dispatch({ type: "ADD_ITEM", payload: productData })
                    }
                  >
                    Add To Cart
                  </button>
                )}
                {quantityCount(state, productData.id) > 1 && (
                  <button
                    onClick={() =>
                      dispatch({ type: "DECREASE", payload: productData })
                    }
                  >
                    -
                  </button>
                )}
                {quantityCount(state, productData.id) === 1 && (
                  <button
                    onClick={() =>
                      dispatch({ type: "REMOVE_ITEM", payload: productData })
                    }
                  >
                    <img src={trash} alt="trash" className={styles.trashbtn} />
                  </button>
                )}

                {quantityCount(state, productData.id) > 0 && (
                  <span className={styles.spancounter}>
                    {quantityCount(state, productData.id)}
                  </span>
                )}
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
