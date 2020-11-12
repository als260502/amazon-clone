import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {

    //dispatch the item to datalayer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        price: price,
        image: image,
        rating: rating,
      }
    })

  }

  return (
    <div className='product'>
      <div className="product_info">
        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {Array(rating).fill().map((_, i) => (
            <p key={i}>🌟</p>
          ))}

        </div>

      </div>

      <img
        src={image}
        alt="The lean Startup"
      />

      <button onClick={addToBasket}>Add to basket</button>


    </div>
  )
}

export default Product
