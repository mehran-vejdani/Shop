import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import styles from "./shop.module.css";
import { Container } from "react-bootstrap";
import { CartContext } from "../../context/CartContextProvider";

const ShopCart = () => {
  const { state, dispatch } = useContext(CartContext);
  return (
    <Container>
      <div className={styles.flex}>
        <div>
          {state.selectedItems.map((item) => (
            <Cart key={item.id} data={item} />
          ))}
        </div>

        {state.itemsCounter > 0 && (
          <div>
            <div className={styles.textStyles}>
              <p>
                <span>totla Items:</span>
                {state.itemsCounter}
              </p>
              <p>
                <span>totla Payment:</span>
                {state.total} $
              </p>
            </div>

            <div className={styles.btnGroup}>
              <button onClick={() => dispatch({ type: "CHECKOUT" })}>
                Check out
              </button>
              <button onClick={() => dispatch({ type: "CLEAR" })}>Clear</button>
            </div>
          </div>
        )}

        {state.checkout && (
          <div>
            <h3>Check Out Successfully</h3>
            <Link to="/products">buy more</Link>
          </div>
        )}

        {!state.checkout && state.itemsCounter === 0 && (
          <div>
            <h3>want to buy ?????</h3>
            <Link to="/products">back to shop</Link>
          </div>
        )}
      </div>
    </Container>
  );
};

export default ShopCart;
