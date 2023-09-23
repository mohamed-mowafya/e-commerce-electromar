import React from "react";
import { Link } from "react-router-dom";
import "./reuse.css";
import "primeicons/primeicons.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Search from "./Search/Search";

const Navbar = () => {
  const authenticated = useSelector(({ user }) => user.authenticated);

  return (
    <React.Fragment>
      <TopBar />
      <React.Fragment>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark nav-container">
          <Link style={{ textDecoration: "none", marginLeft: "10%" }} to="/">
            <span className="navbar-brand logo">
              ElectroMar
              <span style={{ color: "red", fontSize: "42px" }}>.</span>
            </span>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="d-flex nav-link" to="products">
                  Products
                </Link>
              </li>
              {authenticated && <bar.auth.MyCart />}
              {!authenticated && <bar.notAuth.MyCart />}
            </ul>
            <Search />
            {authenticated && (
              <div className="cart">
                <i
                  style={{ color: "red" }}
                  className="pi pi-shopping-cart cart-logo"
                ></i>
                <Link className="link ps-4" to="cart">
                  My Cart
                </Link>
              </div>
            )}
          </div>
        </nav>
      </React.Fragment>
    </React.Fragment>
  );
};

const TopBar = () => {
  const authenticated = useSelector(({ user }) => user.authenticated);

  return (
    <div className="topbar">
      <div style={{ marginLeft: "12%" }}>
        <div className="flex-container">
          <div className="p-2">
            <i style={{ color: "red" }} className="p-2 pi pi-phone"></i>
            <span>514-333-3333</span>
          </div>
          <div className="p-2">
            <i style={{ color: "red" }} className="p-2 pi pi-at"></i>
            <span>electromar@electromar.ca</span>
          </div>
          <div className="p-2">
            <i style={{ color: "red" }} className="p-2 pi pi-map-marker"></i>
            <span>1523 rue Saint-Jacques</span>
          </div>
          {authenticated ? <bar.auth.MyAccount /> : <bar.notAuth.MyAccount />}
        </div>
      </div>
    </div>
  );
};

const bar = {
  auth: {
    MyAccount: () => {
      const dispatch = useDispatch();
      const setAuthenticated = (auth) => {
        dispatch({ type: "SET_AUTHENTICATED", paylod: auth });
      };

      const handleLogout = () => {
        axios
          .post(
            `${process.env.REACT_APP_API_URL}logout`,
            {},
            { withCredentials: true }
          )
          .then(() => {
            setAuthenticated(false);
          });
      };

      return (
        <React.Fragment>
          <div className="p-2 ms-auto">
            <i style={{ color: "red" }} className="pi pi-user p-2 pt-2"></i>

            <Link className="link" to="profile">
              My Account
            </Link>
          </div>

          <div className="p-2">
            <i style={{ color: "red" }} className="pi pi-sign-out p-2 pt-2"></i>
            <Link onClick={handleLogout} className="link" to="">
              Sign out
            </Link>
          </div>
        </React.Fragment>
      );
    },
    MyCart: () => {
      return (
        <div className="mobile-account">
          <li className="d-flex nav-link">
            <Link className="d-flex nav-link" to="profile">
              My Account
            </Link>
          </li>
          <div className="mobile-cart">
            <li className="d-flex nav-link">
              <Link className="d-flex nav-link" to="cart">
                My Cart
              </Link>
            </li>
          </div>
        </div>
      );
    },
  },
  notAuth: {
    MyAccount: () => {
      return (
        <React.Fragment>
          <div className="p-2 ms-auto">
            <i
              style={{ color: "red", paddingTop: "10%" }}
              className="p-2 pi pi-sign-in"
            ></i>

            <Link className="link" to="login">
              Sign in
            </Link>
          </div>

          <div className="p-2">
            <i
              style={{ color: "red", paddingTop: "10%" }}
              className="p-2 pi pi-user"
            ></i>

            <Link className="link" to="signup">
              Sign up
            </Link>
          </div>
        </React.Fragment>
      );
    },
    MyCart: () => {
      return (
        <div className="mobile-account">
          <li className="d-flex nav-link">
            <Link className="link" to="login">
              Sign in
            </Link>
          </li>
          <li className="d-flex nav-link">
            <Link className="link" to="signup">
              Sign up
            </Link>
          </li>
        </div>
      );
    },
  },
};

export default Navbar;
