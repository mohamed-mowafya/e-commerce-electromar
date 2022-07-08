import React, { useEffect } from "react";
import classes from "./login.module.css";
import axios from "axios";

const Login = () => {
  useEffect(() => {}, []);

  const formHandler = async (e) => {
    e.preventDefault();

    debugger;

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await axios.post(
      "http://localhost:5000/login",
      {
        email: email,
        password: password,
      },
      { withCredentials: true }
    );

    console.log(response);
    testFunc();
  };

  const testFunc = async () => {
    await axios
      .get("http://localhost:5000/isauth", { withCredentials: true })
      .then((res) => {
        console.log(res);
        console.log("here");
      });
  };

  return (
    <form onSubmit={formHandler} className="w-auto">
      <div className="col-sm-6 mb-3">
        <label for="email" className={`form-label ${classes.loginFormText}`}>
          Email address
        </label>
        <input
          type="email"
          className={`form-control`}
          id="email"
          aria-describedby="emailHelp"
        />
        <div id="emailHelp" className="form-text">
          We'll never share your email with anyone else.
        </div>
      </div>
      <div class="col-sm-6 mb-3">
        <label for="password" className={`form-label ${classes.loginFormText}`}>
          Password
        </label>
        <input type="password" className={`form-control`} id="password" />
      </div>
      <div className="col-sm-5">
        <button
          style={{ backgroundColor: "black" }}
          type="submit"
          className={`btn ps-4 pe-4 ${classes.loginBtn}`}
        >
          <b>Sign in</b>
        </button>
      </div>
    </form>
  );
};

export default Login;
