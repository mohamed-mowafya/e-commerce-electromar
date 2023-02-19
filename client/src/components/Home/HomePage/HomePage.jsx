import React, { useState } from "react";
import aorus from "../../../images/carousel/aorus.jpg";
import psvr2 from "../../../images/carousel/psvr2.jpg"
import gow from "../../../images/carousel/gow.jpg"
import Product from "../../Product/Product";
import "./homepage.css"
import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";


const HomePage = () => {
  useAuth();
  const [homeProducts, setHomeProducts] = useState([]);

  useEffect(() => {
    getFeaturedProducts();
  }, [])

  const getFeaturedProducts = async () => {
    await axios.get("http://localhost:5000/products", {
      params: {
        limit: 8
      }
    }
    )
      .then((res) => {
        setHomeProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
  }




  return (
    <React.Fragment>
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={aorus} className="d-block w-100" data-bs-interval="2000" alt="aorus" />
          </div>
          <div className="carousel-item">
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
      {homeProducts.length > 0 &&
        <Product products = {homeProducts} />
      }
    </React.Fragment>
  );

};

export default HomePage;
