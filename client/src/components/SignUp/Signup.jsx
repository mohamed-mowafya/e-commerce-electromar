import React, { useEffect } from "react";
import classes from "../Login/login.module.css";

const SignUp = () => {
  useEffect(() => {}, []);
  return (
    <React.Fragment>
      <form className="w-auto">
        <div className={`col-lg-6 mb-3`}>
          <label
            for="exampleInputEmail1"
            className={`form-label ${classes.loginFormText}`}
          >
            Email address
          </label>
          <input
            type="email"
            className={`form-control`}
            id="exampleInputEmail1"
          />
        </div>
        <div class="col-lg-6 mb-3">
          <label
            for="exampleInputPassword1"
            className={`form-label ${classes.loginFormText}`}
          >
            Password
          </label>
          <input
            type="password"
            className={`form-control`}
            id="exampleInputPassword1"
          />
        </div>
        <div class="col-lg-6 mb-3">
          <label
            for="exampleInputPassword1"
            className={`form-label ${classes.loginFormText}`}
          >
            Confirm your Password
          </label>
          <input
            type="password"
            className={`form-control`}
            id="exampleInputPassword1"
          />
        </div>
        <div className="col-lg-5">
          <button
            style={{ backgroundColor: "black" }}
            type="submit"
            className={`btn ps-4 pe-4 ${classes.loginBtn}`}
          >
            <b>Sign up</b>
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default SignUp;
