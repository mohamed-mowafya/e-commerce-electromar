import React from "react";
import { Link } from "react-router-dom";
import classes from "../../components/Login/LoginPage/loginPage.module.css";

import SignUp from "../../components/SignUp/SignupForm/Signup";

const SignUpPage = () => {
  return (
    <React.Fragment>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6">
            <h1 className={`mb-4 ${classes.loginTitle}`}>Create an account</h1>
            <SignUp />
          </div>
          <div className="col-lg-6 my-5">
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
              to="/login"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SignUpPage;
