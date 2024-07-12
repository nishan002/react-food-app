import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";

function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <Modal>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          <li key={item.id}>{item.name} - {item.quantity}</li>;
        })}
      </ul>
    </Modal>
  );
}

export default Cart;
