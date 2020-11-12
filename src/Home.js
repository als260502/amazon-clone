import React from 'react'

import './Home.css'
import Product from './Product'

function Home() {
  return (
    <div className='home'>

      <div className="home_container">
        <img
          className="home_image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="Banner"
        />

        <div className="home_row">
          <Product
            id="12312341"
            title="The Lean Startup: How Constant Innovation 
            Creates Radically Successful Businesses: How 
            Relentless Change Creates Radically Successful Businesses"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41nnVZbC+eL._SX341_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            id="49312341"
            title="Kenwood kMix Stand Mixer for Baking,
            Stylish Kitchen Mixer with K-beater, Dough 
            Hook and Whisky, 5 Litre Glass Bowl"
            price={239.0}
            image="https://kitchenaid.vtexassets.com/arquivos/ids/161702-800-800?width=800&height=800&aspect=true"
            rating={4}
          />


        </div>

        <div className="home_row">
          <Product
            id="4903850"
            title="Relógio Garmin Venu 43mm Smartwatch Silicone Band"
            price={199.0}
            image="https://images-na.ssl-images-amazon.com/images/I/51kyjYuOZhL._AC_SL1000_.jpg"
            rating={3}
          />
          <Product
            id="23445930"
            title="Novo Echo Dot (4ª Geração): Smart Speaker com Alexa - Cor Preta"
            price={89.9}
            image="https://http2.mlstatic.com/D_NQ_NP_985505-MLB32686886919_102019-O.webp"
            rating={5}
          />

          <Product
            id="3254354345"
            title="Apple iPad 8ª Geração 10.2', Wi-Fi, 128GB Space Gray - A2270"
            price={598.89}
            image="https://images-na.ssl-images-amazon.com/images/I/71UddJ3JSLL._AC_SL1500_.jpg"
            rating={2}
          />

        </div>

        <div className="home_row">
          <Product
            id="49030850"
            title="Samsung LC49RG90SSUXEN 49' Curved Led Gaming Monitor"
            price={199.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71e1jYter4L._AC_SL1000_.jpg"
            rating={3}
          />


        </div>

      </div>

    </div>
  )
}

export default Home
