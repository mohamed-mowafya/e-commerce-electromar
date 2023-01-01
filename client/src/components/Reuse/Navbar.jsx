import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./reuse.module.css";
import "primeicons/primeicons.css";
import "./bootstrap_modif.css";
import isAuth from "./IsAuth";


const Navbar = () => {

  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, [])

  const checkAuth = async () => {
    let statusCode = await isAuth();
    if (statusCode === 201) {
      setAuthenticated(true);
    }
  }

  return (
    <React.Fragment>
      <div className={classes.topbar}>
        <div style={{ marginLeft: "12%" }}>
          <div className={classes.flexContainer}>
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
            {authenticated ?
              <div style={{ marginRight: "10%" }} className="p-2 ms-auto">
                <i style={{ color: "red" }} className="pi pi-user p-2 pt-2"></i>

                <Link className={classes.link} to="profile">
                  My Account
                </Link>
              </div>
              :
              <React.Fragment>
                <div className="p-2 ms-auto">
                  <i style={{ color: "red", paddingTop: "10%" }} className="p-2 pi pi-sign-in"></i>

                  <Link className={classes.link} to="login">
                    Sign in
                  </Link>
                </div>

                <div className="p-2">
                  <i style={{ color: "red", paddingTop: "10%" }} className="p-2 pi pi-user"></i>

                  <Link className={classes.link} to="signup">
                    Sign up
                  </Link>
                </div>
                </React.Fragment>
            }
              </div>
        </div>
        </div>

        <React.Fragment>
          <nav
            className={`navbar navbar-expand-lg navbar-dark bg-dark ${classes.navContainer}`}
          >
            <Link style={{textDecoration: 'none', marginLeft:"10%"}} to="/">
            <span className={`navbar-brand ${classes.logo}`}>
              ElectroMar<span style={{ color: "red", fontSize: "42px" }}>.</span>
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
                  <Link className={`nav-link ${classes.navLink}`} to="profile">
                    Products
                  </Link>
                </li>
                {authenticated &&

                  <div className={classes.mobileAccount}>
                    <li className={`d-flex ${classes.navLink} `}>
                      <Link className={classes.link} to="profile">
                        My Account
                      </Link>
                    </li>
                    <div className={classes.mobileCart}>
                      <li className={`d-flex ${classes.navLink} `}>
                        <Link className={classes.link} to="profile">
                          My Cart
                        </Link>
                      </li>
                    </div>
                  </div>
                }
                {!authenticated &&
                  <div className={classes.mobileAccount}>
                    <li className={`d-flex ${classes.navLink} `}>
                      <Link className={classes.link} to="profile">
                        Sign in
                      </Link>
                    </li>
                    <li className={`d-flex ${classes.navLink} `}>
                      <Link className={classes.link} to="signup">
                        Sign up
                      </Link>
                    </li>
                  </div>
                }
              </ul>

              <form className={`d-flex  ${classes.searchForm} me-4`}>
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder=" Search for a product"
                  aria-label="Search"
                />
                <button className={`btn ${classes.searchBtn}`} type="submit">
                  <i className="pi pi-search" />
                </button>
              </form>

              {authenticated &&
                <div className={`${classes.cart}`}>
                  <i
                    style={{ color: "red" }}
                    className={`pi pi-shopping-cart ${classes.cartLogo}`}
                  ></i>
                  <Link className={`${classes.link} ps-4`} to="profile">
                    My Cart
                  </Link>
                </div>
              }
            </div>
          </nav>
        </React.Fragment>
    </React.Fragment>
  );
};

export default Navbar;
