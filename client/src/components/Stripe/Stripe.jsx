import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./StripeCheckoutForm";
import "./stripe.css";
import axios from "axios";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

const Stripe = ({ cart }) => {
  const [clientSecret, setClientSecret] = useState("");

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
  debugger;
  return (
    <>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
};

export default Stripe;
