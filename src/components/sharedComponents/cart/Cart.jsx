import React, { useContext } from "react";
//material
import { Container } from "react-bootstrap";
import styles from "./shop.module.css";
//functions
import { shorten } from "../../helper/functions";
//icon
import trash from "../../assets/icons/trash.svg";
//context
import { CartContext } from "../../context/CartContextProvider";
const Cart = (props) => {
  const { dispatch } = useContext(CartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <Container>
      <div className={styles.container}>
        <img src={image} alt="product" className={styles.shopImage} />
        <div className={styles.details}>
          <h3>{shorten(title)}</h3>
          <p>{price} $</p>
        </div>
        <div className={styles.btnGroup}>
          {quantity > 1 ? (
            <button
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            >
              -
            </button>
          ) : (
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: props.data })
              }
            >
              <img src={trash} alt="trash" className={styles.trashbtn} />
            </button>
          )}

          <button
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          >
            +
          </button>
          <span className={styles.spancounter}>{quantity}</span>
        </div>
      </div>
    </Container>
  );
};

export default Cart;
