import "../../Product/product_card.css"
import reuseClasses from "../../../components/Reusable/reuse.module.css";
import { useEffect } from "react";

const Card = (props) =>{

    useEffect(()=>{
        console.log(props.product)
        debugger;
    },[])

    const buildImageUrl = (fileName) => {
        return `http://localhost:5000/file/${fileName}`;
    }

    return (
        <div className="card col-md-5 g-0 border-0 ms-auto me-auto d-flex flex-wrap align-items-center">
            <div className="bg-image hover-overlay ripple ripple-surface ripple-surface-light" data-mdb-ripple-color="light">
                <img crossOrigin="anonymous" className="card-img-top" src={buildImageUrl(props.product.image.fileName)} />
            </div>
            <div className={`card-body p-0 d-flex flex-column text-left pb-2 ${props.extraBodyClass}`}>
                <div className="text-left">
                    <p className="text-muted mb-0 p-0">NEW</p>
                    <b><p className={`text-dark mb-0`}>{props.product.price}$</p></b>
                    <p className={`${reuseClasses.productTitle} pb-0`}>{props.product.name}</p>

                </div>
                <div className="d-flex justify-content-center mobile-mt">
                    <i style={{ color: "red" }} className="pi pi-shopping-cart mt-md-1 pe-2 fw-bold" />
                    <button type="button" className={`btn p-0 ${reuseClasses.cartBtn} fw-bold`}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default Card;