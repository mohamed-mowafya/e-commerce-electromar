import React from "react";
import { useState } from "react";
import classes from "../Login/login.module.css";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";
import isAuth from "../Reuse/IsAuth"

const SignUp = () => {

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [showPassError, setShowPassError] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    checkAuth();
  },[])

  useEffect(() => {
    if (confirmPass !== password && confirmPass) {
      setShowPassError(true);
    }
    else {
      setShowPassError(false);
    }
  }, [confirmPass, password])

  const handleSubmit = async (e) => {
    e.preventDefault();

    axios.post("http://localhost:5000/register",
      {
        email,
        password,
        admin: false // Users don't have admin access by default.
      }
    )

    navigate("/")

  }

  const checkAuth = async () => {
    let statusCode = await isAuth();
    if (statusCode === 201) {
      navigate("/")
    }
  }

  return (
    <React.Fragment>
      <form className="w-auto" onSubmit={handleSubmit}>
        <div className={`col-lg-6 mb-3`}>
          <label
            htmlFor="email"
            className={`form-label ${classes.loginFormText}`}
          >
            Email address
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`form-control`}
            id="exampleInputEmail1"
          />
        </div>
        <div class="col-lg-6 mb-3">
          <label
            htmlFor="password"
            className={`form-label ${classes.loginFormText}`}
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control`}
            id="inputPassword"
          />
        </div>
        <div class="col-lg-6 mb-3">
          <label
            htmlFor="password2"
            className={`form-label ${classes.loginFormText}`}
          >
            Confirm your Password
          </label>
          <input
            type="password"
            onChange={(e) => setConfirmPass(e.target.value)}
            className={`form-control`}
            id="inputPassword2"
          />
          {showPassError &&
            <span className="text-danger">Your password does not match the previous field.</span>
          }
        </div>
        <div className="col-lg-5">
          <button
            style={{ backgroundColor: "black" }}
            type="submit"
            disabled={showPassError}
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
