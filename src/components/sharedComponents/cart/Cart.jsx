import React, { useContext } from "react";

//functions
import { shorten } from "../../helper/functions";
//icon
import trash from "../../assets/icons/trash.svg";
//context
import { CartContext } from "../../context/CartContextProvider";
const Cart = (props) => {
  const { dispatch } = (useContext = CartContext);
  const { image, title, price, quantity } = props.data;
  return (
    <div>
      <img src={image} alt="product" />
      <div>
        <h3>{shorten(title)}</h3>
        <p>{price} $</p>
      </div>
      <div>
        <span>{quantity}</span>
      </div>
      <div>
        {quantity > 1 ? (
          <button
            onClick={() => dispatch({ type: "DECREASE", payload: props.data })}
          >
            -
          </button>
        ) : (
          <button
            onClick={() =>
              dispatch({ type: "REMOVE_ITEM", payload: props.data })
            }
          >
            <img src={trash} alt="trash" />
          </button>
        )}

        <button
          onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Cart;
