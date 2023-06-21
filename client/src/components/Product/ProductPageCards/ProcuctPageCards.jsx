import React from "react";
import "../product_card.css";
import SingleCard from "../../../components/Reusable/Card/SingleCard";

const Product = (props) => {
  return (
    <React.Fragment>
      <div className="container mt-4">
        <div className="row justify-content-left">
          {props.products.map((product) => {
            return (
              <div className="col-sm-4 col-md-3 mb-4" key={product.id}>
                <SingleCard product={product} />
              </div>
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
