import React from 'react'
import { currencyFormatter } from '../util/formatting'

function CartItem({name, quantity, price, onIncrease, onDecrease}) {
  console.log("Cart Item Component")

  return (
    <li className='cart-item'>
        <p>
            {name} - {quantity} X {currencyFormatter.format(price)}
        </p>
        <p className='cart-item-actions'>
            <button onClick={onDecrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onIncrease}>+</button>
        </p>
    </li>
  )
}

export default CartItem
