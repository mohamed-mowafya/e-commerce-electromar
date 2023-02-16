import React, { useEffect, useState } from "react";
import "./product_card.css"
import reuseClasses from "../../components/Reusable/reuse.module.css";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


const Product = (props) => {

    const [width, setWidth] = useState(window.innerWidth);


    const isMobile = () => {
        return window.matchMedia('screen and (max-width: 768px)').matches;
    }

    const buildImageUrl = (fileName) => {
        console.log(fileName);
        return `http://localhost:5000/file/${fileName}`;
    }

    useEffect(() => {
        /**
         * Function that will re-render component on screen change size.
         * We need this because we limit the number of shown featured products
         * for mobile users. If they switch from a desktop option to mobile, we need
         * to be able to adjust to their screensize.
         */
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const Card = ({ product }) => {
        return (
            <div className="card col-md-5 g-0 border-0 ms-auto me-auto d-flex flex-wrap align-items-center">
                <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                    <img crossorigin="anonymous" className="card-img-top" src={buildImageUrl(product.image.fileName)} />
                </div>
                <div className="card-body p-0 d-flex flex-column">
                    <div className="text-left">
                        <p className="text-muted mb-0 p-0">NEW</p>
                        <b><p className={`text-dark mb-0`}>{product.price}$</p></b>
                        <p className={`${reuseClasses.productTitle} pb-0`} style={{height: "60px"}}>{product.name}</p>

                    </div>
                    <div className="d-flex justify-content-center mobile-mt">
                        <i style={{ color: "red" }} className="pi pi-shopping-cart mt-md-1 pe-2 fw-bold" />
                        <button type="button" className={`btn p-0 ${reuseClasses.cartBtn} fw-bold`}>Add to cart</button>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <React.Fragment>
            {props.products &&
                <div className="ms-auto me-auto">
                    <h3 className={`${reuseClasses.productText} text-dark mt-5 text-center mb-5 pb-1`}>Featured Products</h3>
                    <div className="wrapper">
                        <Splide
                            options={{
                                perPage: isMobile() ? 3 : 5,
                                height: '30rem',
                                rewind: true,
                                padding: 0,
                                gap: '0.5rem',
                            }}
                        >
                            {props.products.map((product) => {

                                return (
                                    <SplideSlide>
                                        <Card product={product} />
                                    </SplideSlide>
                                )

                            })}
                        </Splide>
                    </div>
                </div>
            }
        </React.Fragment>

    );

};

export default Product;
