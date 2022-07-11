import React, { useState } from "react";
import classes from "./login.module.css";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();

    const response = await axios.post(
      "http://localhost:5000/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    console.log(response);
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
      <div className="col-lg-6 mb-3">
        <label
          htmlFor="email"
          className={`form-label ${classes.loginFormText}`}
        >
          Email address
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`form-control`}
          id="email"
        />
      </div>
      <div className="col-lg-6 mb-3">
        <label
          htmlFor="password"
          className={`form-label ${classes.loginFormText}`}
        >
          Password
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className={`form-control`}
          id="password"
        />
      </div>
      <div className="col-lg-5">
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
