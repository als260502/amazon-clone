import React from 'react'

import CurrencyFormat from 'react-currency-format'
import { useStateValue } from './StateProvider'

import './Subtotal.css'

function Subtotal() {

  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = (basket) => {

    const totalPrice = basket.reduce((accumulator, items) =>
      accumulator + items.price, 0);

    return totalPrice;

  }

  return (
    <div className='subtotal'>
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items):
          <strong>{` ${value}`}</strong>
            </p>
            <small className='subtotal_gift'>
              <input type="checkbox" />This order contains a gift
        </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparation={true}
        prefix={"$"}
      />

    </div>
  )
}

export default Subtotal
