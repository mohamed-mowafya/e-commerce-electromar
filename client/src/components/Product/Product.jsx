import React from "react";
import "./product_card.css"
import reuseClasses from "../../components/Reusable/reuse.module.css";

const Product = () => {

    return (
        <React.Fragment>
            <section>
                <div className="card mb-4 mt-3 ms-auto me-auto" style={{ width: "16rem"}}>
                    <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light"
                        data-mdb-ripple-color="light">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                            className="img-fluid"
                            alt="Laptop" />
                        <a href="#!">
                            <div className="mask"></div>
                        </a>
                    </div>
                    <div className="card-body pb-0">
                        <div className="d-flex justify-content-center">
                            <div className="text-center">
                            <b><p className={`text-dark ${reuseClasses.productTitle}`}>Dell Xtreme 270</p></b>
                            <b><p className={`text-dark ${reuseClasses.productTitle}`}>333$</p></b>
                            </div>

                        </div>
                    </div>
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center pb-0">
                            <button type="button" className="btn btn-primary ms-auto me-auto">Add to cart</button>
                        </div>
                    </div>
                </div>

            </section>
        </React.Fragment>
    );

};

export default Product;
