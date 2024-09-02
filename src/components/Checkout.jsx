import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Input from "./UI/Input";

function Checkout() {
  const cartCtx = useContext(CartContext)
  const cartTotal = cartCtx.items.reduce((totalPrice, item) => {
    return totalPrice + item.quantity * item.price;
  }, 0);

  return (
    <Modal>
      <form action="">
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>
        <Input label="Full Name" type="text" id="full-name"/>
        <Input label="E-Mail Address" type="email" id="email"/>
        <Input label="Stree" type="text" id="street"/>
        <div className="control-row">
            <Input lavel="Postal Code" type="text" id="postal-code"/>
            <Input lavel="City" type="text" id="city"/>
        </div>

        <p className="modal-actions">
            <Button textOnly>Close</Button>
            <Button>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}

export default Checkout;
