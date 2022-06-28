import React, { useContext, useState } from "react";
import { cartContext } from "../cart/context/CartContextProvider";
import CartItems from "../cart/CartItems";
import styles from "./Cart.module.css";
function Cart() {
  const { state, dispatch } = useContext(cartContext);
  
  return (
    <div className={styles.container}>
      <div className={styles.checkout}>
        <h1>Order Detailes</h1>

        <h3>Total Item : {state.itemCounter}</h3>
        <h3>Total Price : {state.total}</h3>
        
        <div>
          <button> Check Out</button>
        </div>
      </div>
      <div className={styles.itemcontainer}>
        <div className={styles.header}>
          <span>Item</span>
          <span>Price</span>
          <span>Count</span>
          <span>Total Price</span>
        </div>
        <div>
          {state.selectedItem.map((item) => (
            <CartItems key={item.id} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Cart;
