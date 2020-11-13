import React, { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { Link } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format'

import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

import './Payment.css';
import { getBasketTotal } from './reducer';
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);


  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const handleChange = (event) => {

    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");


  }

  return (
    <div className="payment">

      <div className="payment_container">
        <h1>
          Checkout (
            <Link to='/checkout '>{basket?.length} items</Link>
            )
        </h1>

        <div className="payment_section">

          <div className="payment_title">
            <h3>Delivery address</h3>
          </div>

          <div className="payment_address">
            <p>{user?.email}</p>
            <p>123 React Lane</p>
            <p>Los Angeles, CA</p>
          </div>


        </div>

        <div className="payment_section">
          <div className="payment_title">
            <h3>Review itens and delivery</h3>
          </div>

          <div className="payment_items">
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

        <div className="payment_section">

          <div className="payment_title">
            <h3>Payment method</h3>
          </div>

          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement />

              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <h3>
                      Order Total: {value}
                    </h3>

                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparation={true}
                  prefix={"$"}
                />

                <button disabled={
                  processing || disabled || succeeded
                }
                >
                  <span>
                    {processing ?
                      <p>Processing</p> : "Buy Now"
                    }
                  </span>

                </button>
              </div>
            </form>

          </div>

        </div>

      </div>

    </div>
  )
}

export default Payment
