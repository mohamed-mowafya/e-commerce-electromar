import React, { useState } from "react";
import classes from "./login.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import useAuth from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  useAuth(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const dispatchEmail = (email) =>
    dispatch({ type: "SET_EMAIL", payload: email });

  const [password, setPassword] = useState("");

  const formHandler = async (e) => {
    e.preventDefault();

    await axios
      .post(
        "http://localhost:5000/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      )
      .then(() => {
        toast.dismiss();
        toast.success("Welcome !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        dispatchEmail(email);
        dispatch({ type: "SET_AUTHENTICATED", payload: true });
        navigate("/");
      })
      .catch(() => {
        toast.dismiss();
        toast.error("Username or password is incorrect", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
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
