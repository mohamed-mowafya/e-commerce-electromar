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
        <nav className="navbar navbar-expand-lg navbar-light nav-container">
          <div className="container-fluid px-4">
            <Link style={{ textDecoration: "none" }} to="/">
              <span className="navbar-brand logo">
                ElectroMar<span style={{ color: "#dc2626" }}>.</span>
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
              <ul className="navbar-nav ms-5 me-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="products">
                    Products
                  </Link>
                </li>
                {authenticated && (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="orders">
                        Orders
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="profile">
                        Profile
                      </Link>
                    </li>
                  </>
                )}
                {authenticated && <bar.auth.MyCart />}
                {!authenticated && <bar.notAuth.MyCart />}
              </ul>

              <div className="d-flex align-items-center gap-3">
                <Search />
                {authenticated && (
                  <Link className="cart-btn" to="cart">
                    <i className="pi pi-shopping-cart me-2"></i>
                    Cart
                  </Link>
                )}
              </div>
            </div>
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
      <div className="container-custom">
        <div className="flex-container">
          <div className="p-2">
            <i className="p-2 pi pi-phone" style={{ color: "var(--primary-light)" }}></i>
            <span>514-333-3333</span>
          </div>
          <div className="p-2">
            <i className="p-2 pi pi-at" style={{ color: "var(--primary-light)" }}></i>
            <span>electromar@electromar.ca</span>
          </div>
          <div className="p-2">
            <i className="p-2 pi pi-map-marker" style={{ color: "var(--primary-light)" }}></i>
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
            <i className="pi pi-user p-2 pt-2" style={{ color: "var(--primary-light)" }}></i>
            <Link className="link" to="profile">
              My Account
            </Link>
          </div>

          <div className="p-2">
            <i className="pi pi-sign-out p-2 pt-2" style={{ color: "var(--primary-light)" }}></i>
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
            <i className="p-2 pi pi-sign-in" style={{ color: "var(--primary-light)" }}></i>
            <Link className="link" to="login">
              Sign in
            </Link>
          </div>

          <div className="p-2">
            <i className="p-2 pi pi-user" style={{ color: "var(--primary-light)" }}></i>
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
