import React from "react";
import aorus from "../../../images/carousel/aorus.jpg";
import psvr2 from "../../../images/carousel/psvr2.jpg"
import gow from "../../../images/carousel/gow.jpg"

import "./homepage.css"
import { useEffect } from "react";
import $ from 'jquery';


const HomePage = () => {


  return (
    <React.Fragment>
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={aorus} className="d-block w-100" data-bs-interval="2000" alt="aorus" />
          </div>
          <div class="carousel-item">
            <img src={psvr2} className="d-block w-100" data-bs-interval="2000" alt="psvr2" />
          </div>
          <div className="carousel-item">
            <img src={gow} className="d-block w-100" data-bs-interval="2000" alt="gow" />
          </div>
        </div>
        <button className="carousel-control-prev" role="button" data-bs-target="#homeCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" role="button" data-bs-target="#homeCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </React.Fragment>
  );

};

export default HomePage;
