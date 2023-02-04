import React from "react";
import aorus from "../../../images/carousel/aorus.jpg";
import psvr2 from "../../../images/carousel/psvr2.jpg"
import gow from "../../../images/carousel/gow.jpg"
import Products from "../../Product/Product";
import "./homepage.css"

const HomePage = () => {

  return (
    <React.Fragment>
      <div id="carouselExampleControls" className={`carousel slide`} data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={aorus} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={psvr2} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={gow} className="d-block w-100" alt="..."/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <Products/>
    </React.Fragment>
  );

};

export default HomePage;
