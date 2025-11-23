import React from "react";
import { useState } from "react";
import classes from "../../Login/LoginForm/login.module.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";

const SignUpForm = () => {
  useAuth(true);
  const navigate = useNavigate();

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPass, setConfirmPass] = useState(null);
  const [showPassError, setShowPassError] = useState(false);

  useEffect(() => {
    if (showPassError) setShowPassError(false);
  }, [password, confirmPass]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (confirmPass !== password && confirmPass) {
      setShowPassError(true);
    } else {
      await axios
        .post(`${process.env.REACT_APP_API_URL}register`, {
          email,
          password,
        })
        .then(() => {
          toast.success("Welcome, please sign in with your new account.", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        });
      navigate("/login");

      setShowPassError(false);
    }
  };

  return (
    <React.Fragment>
      <form className="w-100" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label
            htmlFor="email"
            className={`form-label ${classes.loginFormText}`}
          >
            Email Address
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className={`form-control ${classes.formControl}`}
            id="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password"
            className={`form-label ${classes.loginFormText}`}
          >
            Password
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className={`form-control ${classes.formControl}`}
            id="password"
            placeholder="Create a password"
            required
          />
        </div>
        <div className="mb-3">
          <label
            htmlFor="password2"
            className={`form-label ${classes.loginFormText}`}
          >
            Confirm Password
          </label>
          <input
            type="password"
            onChange={(e) => setConfirmPass(e.target.value)}
            className={`form-control ${classes.formControl}`}
            id="password2"
            placeholder="Re-enter your password"
            required
          />
          {showPassError && (
            <span style={{ color: '#dc2626', fontSize: '0.875rem', marginTop: '0.5rem', display: 'block' }}>
              Passwords do not match. Please try again.
            </span>
          )}
        </div>
        <button
          type="submit"
          disabled={showPassError}
          className={`btn ${classes.loginBtn}`}
        >
          Create Account
        </button>
      </form>
    </React.Fragment>
  );
};

export default SignUpForm;
