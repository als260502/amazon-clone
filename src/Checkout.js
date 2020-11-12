import React from 'react'

import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket },] = useStateValue();


  return (
    <div className='checkout'>
      <div className="checkout_left">
        <img src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Checkout"
          className="checkout_ad"
        />
        <div>
          <h2 className='checkout_title'>
            Your shopping basket
          </h2>

          {basket.map(item => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}


        </div>

      </div>

      <div className="checkout_right">
        <Subtotal />

      </div>



    </div>
  )
}

export default Checkout
