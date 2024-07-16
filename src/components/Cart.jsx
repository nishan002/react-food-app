import React, { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";

function Cart() {
  const cartCtx = useContext(CartContext);
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    console.log(totalPrice);
    totalPrice + item.quantity + item * price;
  }, 0);

  return (
    <Modal>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => {
          <li key={item.id}>
            {item.name} - {item.quantity}
          </li>;
        })}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly>Close</Button>
        <Button>Go to Chekout</Button>
      </p>
    </Modal>
  );
}

export default Cart;
