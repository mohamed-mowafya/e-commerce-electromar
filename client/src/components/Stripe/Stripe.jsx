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
        const headers = {
            Authorization: `Bearer ${process.env.REACT_APP_STRIPE_API_KEY}`
          };
          
        axios.post(`${process.env.REACT_APP_API_URL}create-payment-intent`, { cart }, { headers, withCredentials: true }) //
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, []);

    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    return (
        <>
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </>
    );

}

export default Stripe;