import React, { useState, useEffect } from "react";
import xbox from "../../../images/carousel/xbox.jpg";
import iphone from "../../../images/carousel/iphone.jpg"
import classes from "./homepage.module.css";
import psvr2 from "../../../images/carousel/psvr2.jpg"
import forspoken from "../../../images/carousel/forspoken.jpg"
import "./flickity_modif.css";
import Flickity from 'react-flickity-component';
import isAuth from "../../Reusable/IsAuth";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

  const flickityOptions = {
    autoPlay: true,
    wrapAround: true,
    isSelected: true
  }

  const CarouselImg = ({ src, alt }) => (
    <div className="carousel-cell">
      <div>
        <img src={src} className={`w-100 img-fluid ${classes.carousel}`} alt={alt} />
      </div>
    </div>
  );


  return (
    <Flickity
      className={'carousel'} // default ''
      elementType={'div'} // default 'div' 
      options={flickityOptions}// takes flickity options {}
      disableImagesLoaded={true} // default false
      reloadOnUpdate // default false
      static // default false
    >
      <CarouselImg src={forspoken} alt="forspoken" />
      <CarouselImg src={xbox} alt="Xbox" />
      <CarouselImg src={psvr2} alt="PSVR2" />
    </Flickity>


  );

};

export default HomePage;
