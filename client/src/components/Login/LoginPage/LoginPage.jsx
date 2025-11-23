import React from "react";
import classes from "./loginPage.module.css";
import { Link } from "react-router-dom";

import Login from "../LoginForm/Login";

const LoginPage = (props) => {
  return (
    <React.Fragment>
      <div className="container py-5">
        <div className={`row ${classes.pageContainer}`}>
          <div className="col-lg-6">
            <h1 className={classes.loginTitle}>Welcome Back</h1>
            <p className={classes.pageSubtitle}>
              Sign in to your account to continue
            </p>
            <Login />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className={classes.benefitsContainer}>
              <h3 className={classes.benefitsTitle}>
                Why Shop With Us?
              </h3>

              <div className={classes.benefitItem}>
                <div className="d-flex align-items-center">
                  <i className={`pi pi-shopping-cart ${classes.loginCartLogo}`}></i>
                  <p className={classes.descriptionSection}>Fast Checkout</p>
                </div>
                <p className={classes.benefitDescription}>
                  Your cart is saved and ready for quick purchases.
                </p>
              </div>

              <div className={classes.benefitItem}>
                <div className="d-flex align-items-center">
                  <i className={`pi pi-history ${classes.loginCartLogo}`}></i>
                  <p className={classes.descriptionSection}>Order History</p>
                </div>
                <p className={classes.benefitDescription}>
                  Track all your orders and reorder with ease.
                </p>
              </div>

              <div className={classes.benefitItem}>
                <div className="d-flex align-items-center">
                  <i className={`pi pi-bell ${classes.loginCartLogo}`}></i>
                  <p className={classes.descriptionSection}>Exclusive Deals</p>
                </div>
                <p className={classes.benefitDescription}>
                  Get early access to sales and special promotions.
                </p>
              </div>

              <div className={classes.linkDivider}>
                <Link className={classes.signUpLink} to="/signup">
                  Don't have an account? Sign up →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default LoginPage;
