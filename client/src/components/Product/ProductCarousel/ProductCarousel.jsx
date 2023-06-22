import React, { useEffect, useState } from "react";
import "../product_card.css";
import reuseClasses from "../../../components/Reusable/reuse.module.css";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import SingleCard from "../../../components/Reusable/Card/SingleCard";

const Product = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = () => {
    return window.matchMedia("screen and (max-width: 768px)").matches;
  };

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
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <React.Fragment>
      {props.products && (
        <div className="ms-auto me-auto">
          <h3
            className={`${reuseClasses.productText} text-dark mt-5 text-center mb-5 pb-1 ms-auto me-auto`}
          >
            Featured Products
          </h3>
          <div className="wrapper">
            <Splide
              options={{
                perPage: isMobile() ? 3 : 5,
                height: "30rem",
                rewind: true,
                padding: 0,
                gap: "0.5rem",
              }}
            >
              {props.products.map((product) => {
                return (
                  <SplideSlide>
                    <SingleCard
                      home={props.home}
                      product={product}
                      extraBodyClass="desc-width-home"
                    />
                  </SplideSlide>
                );
              })}
            </Splide>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Product;
