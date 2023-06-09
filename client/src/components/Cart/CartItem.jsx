import React, { useEffect } from "react";
import "./cart.css";

const CartItem = ({name, price, quantity, imgName, productTotal}) => {
    debugger;
    return (
        <>
            <div className="cart-item-container">
                <div className="cart-item">
                <div className="cart-item-img-container">
                    <img crossorigin="anonymous" src={`http://localhost:5000/file/${imgName}`} />
                    </div>
                    <span className="cart-item-title">{name}</span>
                    <span className="cart-item-price">${price}</span>
                </div>
                <div className="cart-item-footer">
                    <span><i className="pi pi-check mt-1"></i>Available to ship</span>
                    <div className="d-flex">
                    <button type="button" class="btn btn-danger" disabled={quantity < 2}><i className="pi pi-minus"></i></button>
                    <p>{quantity}</p>
                    <button type="button" class="btn btn-danger"><i className="pi pi-plus"></i></button>
                    </div>
                    <span className="remove-txt"><i className="pi pi-trash"></i>Remove</span>
                </div>
                <hr/>
                <div className="d-flex product-total">
                    <span>Product Total</span>
                    <span>${productTotal}</span>
                </div>
            </div>
        </>
    )
}

export default CartItem;