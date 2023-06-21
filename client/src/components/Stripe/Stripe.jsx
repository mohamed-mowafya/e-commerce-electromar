import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./StripeCheckoutForm";
import "./stripe.css";
import axios from "axios";

const Stripe = ({ cart, setCart }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [stripePromise, setStripePromise] = useState(null);

  useEffect(() => {
    axios
      .post(
        `${process.env.REACT_APP_API_URL}create-payment-intent`,
        { cart },
        { withCredentials: true }
      )
      .then((data) => {
        debugger;
        setClientSecret(data.data.clientSecret);
        setStripePromise(loadStripe(process.env.REACT_APP_STRIPE_API_KEY));
      });
  }, []);

  const appearance = {
    theme: "stripe",
    labels: "floating",
  };
  const options = {
    clientSecret,
    appearance,
  };
  return (
    <>
      {clientSecret && stripePromise && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm setCart={setCart} />
        </Elements>
      )}
    </>
  );
};

export default Stripe;
