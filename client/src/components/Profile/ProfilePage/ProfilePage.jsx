import React from "react";
import { Link } from "react-router-dom";
import classes from "./profilePage.module.css";
import useAuth from "../../hooks/useAuth";

const ProfilePage = () => {
  useAuth();
  return (
    <React.Fragment>
      <div className="container" style={{ minHeight: '70vh', paddingTop: '2rem' }}>
        <div className={classes.parentDiv}>
          <h1 className={classes.welcomeMessage}>
            My Account
          </h1>
          <p className={classes.welcomeSubtext}>
            Manage your profile and view your order history
          </p>
        </div>

        <div className={classes.cardsContainer}>
          <div className={classes.profileCard}>
            <div>
              <h5 className={classes.cardTitle}>
                <i className={`pi pi-user-edit me-2 ${classes.cardIcon}`}></i>
                Personal Information
              </h5>
              <p className={classes.cardSubtitle}>
                Update your account password and manage your security settings.
              </p>
              <Link to="/settings" className={classes.cardLink}>
                Manage settings →
              </Link>
            </div>
          </div>

          <div className={classes.profileCard}>
            <div>
              <h5 className={classes.cardTitle}>
                <i className={`pi pi-history me-2 ${classes.cardIcon}`}></i>
                Order History
              </h5>
              <p className={classes.cardSubtitle}>
                Track your recent purchases and view all past orders with detailed information.
              </p>
              <Link to="/orders" className={classes.cardLink}>
                View orders →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
