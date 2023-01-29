import React, { useState, useEffect } from "react";
import xbox from "../../../images/carousel/xbox.jpg";
import iphone from "../../../images/carousel/iphone.jpg"
import classNamees from "./homepage.module.css";
import psvr2 from "../../../images/carousel/psvr2.jpg"
import forspoken from "../../../images/carousel/forspoken.jpg"
import "./flickity_modif.css";
import Flickity from 'react-flickity-component';

const HomePage = () => {


    const flickityOptions = {
        autoPlay: true,
        wrapAround: true,
        isSelected: true
    }


    return (
        <Flickity
            className={'carousel'} // default ''
            elementType={'div'} // default 'div' 
            options={flickityOptions}// takes flickity options {}
            disableImagesLoaded={true} // default false
            reloadOnUpdate // default false
            static // default false
        >
            <img className="carousel-cell img-fluid" src={forspoken} />
            <img className="carousel-cell img-fluid" src={xbox} />
            <img className="carousel-cell img-fluid" src={psvr2} />
        </Flickity>
    );
};

export default HomePage;
