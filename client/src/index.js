import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/store";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const root = ReactDOM.createRoot(document.getElementById("root"));

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

root.render(

  <Provider store={store}>
    <React.StrictMode>
          <App />
    </React.StrictMode>
  </Provider>
);