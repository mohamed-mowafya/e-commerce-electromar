import React from "react";
import "../product_card.css"
import reuseClasses from "../../../components/Reusable/reuse.module.css";

const Product = (props) => {

    const buildImageUrl = (fileName) => {
        debugger;
        return `http://localhost:5000/file/${fileName}`;
    }

    const Card = ({ product }) => {
        return (
            <div className="card col-md-5 g-0 border-0 ms-auto me-auto d-flex flex-wrap align-items-center">
                <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                    <img crossOrigin="anonymous" className="card-img-top" src={buildImageUrl(product.image.fileName)} />
                </div>
                <div className="card-body p-0 d-flex flex-column text-left">
                    <div className="text-left desc-width">
                        <p className="text-muted mb-0 p-0">NEW</p>
                        <b><p className={`text-dark mb-0`}>{product.price}$</p></b>
                        <p className={`${reuseClasses.productTitle} pb-0`} style={{ height: "60px" }}>{product.name}</p>

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
            <div className="container mt-4">
            <div className="row justify-content-center">
            {props.products.map((product) => {
                return (
                    <div className="col-sm-4 col-md-3 mb-4" key={product.id}>
                        <Card product={product} />
                    </div>
                )
            })
            }
            </div>
            </div>
        </React.Fragment>

    );

};

export default Product;