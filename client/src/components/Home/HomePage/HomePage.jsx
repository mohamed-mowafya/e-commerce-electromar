import React from "react";
import xbox from "../../../images/carousel/xbox.jpg";
import psvr2 from "../../../images/carousel/psvr2.jpg"
import gow from "../../../images/carousel/gow.jpg"
import "./flickity_modif.css";

const HomePage = () => {

  return (
    <React.Fragment>
      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={xbox} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={psvr2} class="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
            <img src={gow} class="d-block w-100" alt="..."/>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </React.Fragment>
  );

};

export default HomePage;
