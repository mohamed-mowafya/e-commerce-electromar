import React, { useEffect, useState } from "react"
import ProductPageCards from "../Product/ProductPageCards/ProcuctPageCards"
import axios from "axios";

const Products = () => {

    const [productsArr, setProductsArr] = useState([]);

    const getAllProducts = async () => {
        await axios.get("http://localhost:5000/products")
        .then((res) => {
            setProductsArr(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
      }

    useEffect(() => {
        getAllProducts();
    }, [])

    return (
        <React.Fragment>
            {productsArr.length > 0 &&
                <ProductPageCards products={productsArr} />
            }
        </React.Fragment>
    )
}

export default Products;