import React, { useEffect, useState } from "react";
import ProductPageCards from "../Product/ProductPageCards/ProductPageCards";
import axios from "axios";
import { useSelector } from "react-redux";
import useAuth from "../hooks/useAuth";

const Products = () => {
  useAuth();

  const [productsArr, setProductsArr] = useState([]);
  const productSearch = useSelector(({ user }) => user.search);

  const getAllProducts = async () => {
    await axios
      .get(`${process.env.REACT_APP_API_URL}products`, {
        params: {
          search: productSearch,
        },
      })
      .then((res) => {
        setProductsArr(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, [productSearch]);

  return (
    <React.Fragment>
      {productsArr.length > 0 && (
        <ProductPageCards
          productsPageDesc="products-page-desc products-page-width img-card-products-page"
          products={productsArr}
        />
      )}
    </React.Fragment>
  );
};

export default Products;
