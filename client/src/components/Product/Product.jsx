import React from "react";
import "./product_card.css"
import reuseClasses from "../../components/Reusable/reuse.module.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import splatoon from "../../images/products/splatoon.jpg"


const Product = () => {

    const Card = () => {
        return (
            <div className="card col-md-4 h-25 border-0 ms-auto me-auto">
                <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                    data-mdb-ripple-color="light">
                    <img src={splatoon} />
                    <a href="#!">
                        <div className="mask"></div>
                    </a>
                </div>
                <div className="card-body p-0">
                    <div className="text-left">
                        <p className={`${reuseClasses.productTitle} pb-0`}>Dell Xtreme 270</p>
                        <b><p className={`text-dark `}>333$</p></b>
                    </div>
                </div>
                <div className="card-body p-0 mt-2">
                    <div className="d-flex justify-content-center">
                        <i style={{ color: "red" }} className="pi pi-shopping-cart mt-1 pe-2 fw-bold" />
                        <button type="button" className={`btn p-0 ${reuseClasses.cartBtn} fw-bold`}>Add to cart</button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <React.Fragment>
            <h3 className={`${reuseClasses.productText} text-dark mt-5 text-center`}>Featured Products</h3>
            <div className="wrapper">
                <h2 id="basic-example-heading">Basic Example</h2>

                <Splide
                    options={{
                        perPage: 3,
                        height: '30rem',
                        rewind: true,
                        gap: '0.5rem',
                    }}
                    aria-labelledby="basic-example-heading"
                >
                    <SplideSlide>
                        <Card />
                    </SplideSlide>
                    <SplideSlide>
                        <Card />
                    </SplideSlide>
                    <SplideSlide>
                        <Card />
                    </SplideSlide>
                    <SplideSlide>
                        <Card />
                    </SplideSlide>
                    <SplideSlide>
                        <Card />
                    </SplideSlide>
                    
                </Splide>
            </div>

        </React.Fragment>
    );

};

export default Product;