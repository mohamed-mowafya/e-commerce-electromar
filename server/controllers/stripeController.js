const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = (cart) => {
  // Avoids order amount being manipulated on the client side.

  return parseInt(cart.total * 100); // Stripe expects the order amount in cents.
};

const createPaymentIntent = async (req, res) => {
  const { cart } = req.body;

  // Create a PaymentIntent with the order amount and currency.
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(cart),
    currency: "cad",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = { createPaymentIntent };
