import React, { useEffect } from "react";
import classes from "./loginPage.module.css";
import { Link } from "react-router-dom";

import Login from "../../components/Login/Login";

const LoginPage = () => {
  return (
    <React.Fragment>
      <div className="container p-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className={`mb-4 ${classes.loginTitle}`}>Sign in</h1>
            <Login />
          </div>
          <div className="col-md-6">
            <h3 className={`${classes.secondSection}`}>
              Don't have an account?
            </h3>
            <p style={{ color: "black" }}>
              Here are some of the benefits you’ll enjoy:
            </p>
            <div className="d-flex">
              <i
                style={{ color: "red" }}
                className={`pi pi-shopping-cart ${classes.loginCartLogo}`}
              ></i>
              <p className={classes.descriptionSection}>Fast Checkout</p>
            </div>
            <p style={{ color: "black", marginLeft: "1%" }}>
              Your cart is saved and ready.
            </p>
            <div className="d-flex">
              <i
                style={{ color: "red" }}
                className={`pi pi-refresh ${classes.loginCartLogo}`}
              ></i>
              <p className={classes.descriptionSection}>Quick Recap</p>
            </div>
            <p style={{ color: "black", marginLeft: "1%" }}>
              Your order history is a click away.
            </p>
            <Link
              className={classes.signUpLink}
              style={{ marginLeft: "1%" }}
              to="/signup"
            >
              Sign Up Today
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
