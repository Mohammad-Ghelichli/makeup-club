import React, { useContext } from "react";
import { cartContext } from "../cart/context/CartContextProvider";
import styles from "./CartItems.module.css";
import { shorten } from "../cart/shared/shorten";
//import icon
import delet from "../../assets/icons/delete.svg"
import plus from "../../assets/icons/plus.svg"
import minus from "../../assets/icons/minus.svg"

function CartItems(props) {
  const { state, dispatch } = useContext(cartContext);
  const {name,image_link, price, quantity } = props.data;
  return (
    <div className={styles.container}>
      <div>
        <img src={image_link} className={styles.TtemImg} alt="item" />
        <h3>{shorten(name)}</h3>
      </div>
      <div>
        <h3>{price} $</h3>
      </div>
      <div className={styles.button}>
        <div>
          <img
            src={plus}
            width={40}
            height={40}
            alt="a"
            onClick={() => dispatch({ type: "INCREASE", payload: props.data })}
          />
        </div>
        <div>
        <h3>{quantity}</h3>
        </div>

        {quantity > 1 ? (
          <div>
            <img
              src={minus}
              alt="minus"
              width={40}
              height={40}
              onClick={() =>
                dispatch({ type: "DECREASE", payload: props.data })
              }
            />
          </div>
        ) : (
          <div>
            <img
              src={delet}
              width={40}
              height={40}
              alt="delete"
              onClick={() => dispatch({ type: "REMOVE", payload: props.data })}
            />
          </div>
        )}
      </div>
      <h3>{(quantity * price).toFixed(2)} $</h3>
    </div>
  );
}

export default CartItems;
