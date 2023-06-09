import React, { useEffect, useState } from "react";
import "./cart.css";
import axios from "axios";
import CartItem from "./CartItem";
import useAuth from "../hooks/useAuth";

const Cart = () => {
    useAuth();
    const [cart, setCart] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/cart", { withCredentials: true }).then((response) => {
            setCart(response.data);
        })
    }, [])

    const cartSection = () => {
        return (
            <>
                <h1 className="cart-title">Your Cart</h1>
                <div className="page-container">
                    <div className="cart-container">
                        <div className="d-flex title-container">
                            <p className="electromar-title">ElectroMar<span style={{ color: "red" }}>.</span></p>
                            <p><strong>Sold and shipped by ElectroMar</strong></p>
                        </div>
                        {cart && cart.items.map((item) => {
                            const { name, price, image } = item.product;
                            return (
                                <div className="mb-2">
                                    <CartItem name={name} price={price} quantity={item.quantity} imgName={image.fileName} productTotal={Math.round(price * item.quantity * 100) / 100} />
                                </div>
                            )
                        })}
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