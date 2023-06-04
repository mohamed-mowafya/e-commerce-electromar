import React from "react";
import "./cart.css";

const Cart = () => {

    const cartSection = () => {
        return (
            <>
            <h1 className="cart-title">Your Cart</h1>
            <div className="page-container"> 
            <div className="cart-container">
                <div className="d-flex title-container">
                <p className="electromar-title">ElectroMar<span style={{color: "red"}}>.</span></p>
                <p><strong>Sold and shipped by ElectroMar</strong></p>
                </div>
                <div className="cart-item-container">
                    az
                    </div>
            </div>
            {paymentSection()}
            </div>
        </>
        )
    }

    const paymentSection = () => {
        return (
            <>
            <h3>Order summary</h3>
            </>
        )
    }
    
    return (
        <>
        {cartSection()}
        </>

    )
}

export default Cart;