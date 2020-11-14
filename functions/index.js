const functions = require('firebase-functions');

const express = require('express');
const cors = require('cors');

const stripe = require('stripe')('sk_test_51Hn4KYEvVzpfoAQr3SvLze89JRS16qOGXRKNvZEe80nEZEfD9pv4YmAODCN3BnUP5J2CPyngovghTcSEjTKSjfHT00jJJv5WRE');

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// - Api routes
app.get('/', (request, response) => {
  return response
    .status(200)
    .json({ message: "Hello World!" })
});

app.post('/payments/create', async (request, response) => {
  const { total } = request.query;

  console.log('payment reques received BOOM!! for this ammount >>>', total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,//subunits of the curency
    currency: "usd",
  });

  //console.log(paymentIntent);

  return response
    .status(201)
    .json({
      clientSecret: paymentIntent.client_secret,
    })
});

// - Listen command
exports.api = functions.https.onRequest(app);

