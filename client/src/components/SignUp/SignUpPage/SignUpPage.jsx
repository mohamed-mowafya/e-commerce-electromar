import React from "react";
import { Link } from "react-router-dom";
import classes from "../../Login/LoginPage/loginPage.module.css";
import SignUpForm from "../SignupForm/SignUpForm";

const SignUpPage = () => {
  return (
    <React.Fragment>
      <div className="container py-5">
        <div className={`row ${classes.pageContainer}`}>
          <div className="col-lg-6">
            <h1 className={classes.loginTitle}>Join ElectroMar</h1>
            <p className={classes.pageSubtitle}>
              Create your account and start shopping
            </p>
            <SignUpForm />
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
                <Link className={classes.signUpLink} to="/login">
                  Already have an account? Sign in →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUpPage;
