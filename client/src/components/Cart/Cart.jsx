import React, { useEffect, useState } from "react";
import "./cart.css";
import axios from "axios";
import CartItem from "./CartItem";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import Stripe from "../Stripe/Stripe";

const Cart = () => {
    useAuth(null, true);
    const [cart, setCart] = useState(null);

    useEffect(() => {
        axios.get("http://localhost:5000/cart", { withCredentials: true }).then((response) => {
            setCart(response.data);
        })
    }, [])

    const handleQuantityChange = (action, productId) => {
        if (action === "ADD") {
            axios.post("http://localhost:5000/cart", { productId, quantity: 1 }, { withCredentials: true })
                .then((response) => {
                    setCart(response.data);
                    toast.success("Item added to cart", {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                    });
                    return response;
                });

            return;
        }
        axios.delete(`http://localhost:5000/cart/${productId}`, { withCredentials: true, params: { deleteAll: action === "DELETE_ALL" } })
            .then((response) => {
                setCart(response.data);
                toast.success("Item removed from cart", {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
                return response;
            })
        return;
    }

    const emptyCartDisplay = () => {
        return (
            <>
                <div className="d-flex flex-column justify-content-center empty-cart">
                    <span className="empty-cart-title">Looks like it's empty!</span>
                    <span>Why not add something?</span>
                </div>
                <div class="d-flex empty-cart-logo">
                    <i class="pi pi-shopping-cart"></i>
                </div>
            </>
        )

    }

    const emptyCartFooter = () => {
        return (
            <div className="d-flex empty-footer-container">
                <div className="logo-msg-container">
                    <i className="pi pi-clock"></i>
                    <span className="logo-msg">Quick and easy</span>
                </div>
                <div className="logo-msg-container">
                    <i className="pi pi-car"></i>
                    <span className="logo-msg">Free shipping</span>
                </div>
                <div className="logo-msg-container">
                    <i className="pi pi-money-bill"></i>
                    <span className="logo-msg">Low price guarantee</span>
                </div>
                <div className="logo-msg-container">
                    <i className="pi pi-globe"></i>
                    <span className="logo-msg">Latest and greatest tech</span>
                </div>
            </div>
        )
    }

    const cartDisplay = () => {
        return (
            <>
                <div className="cart-container">
                    <div className="d-flex title-container">
                        <p className="electromar-title">ElectroMar<span style={{ color: "red" }}>.</span></p>
                        <p><strong>Sold and shipped by ElectroMar</strong></p>
                    </div>
                    {cart && cart.items.length > 0 && cart.items.map((item) => {
                        const { name, price, image, _id } = item.product;
                        return (
                            <div className="mb-2">
                                <CartItem productId={_id} handleQuantityChange={handleQuantityChange} name={name} price={price} quantity={item.quantity} imgName={image.fileName} productTotal={Math.round(price * item.quantity * 100) / 100} />
                            </div>
                        )
                    })}
                </div>
                {paymentSection()}
            </>
        )
    }

    const cartSection = () => {
        return (
            <>
                <h1 className="cart-title">Your Cart</h1>
                <div className="page-container">
                    {cart && cart.items.length > 0 ? cartDisplay() : emptyCartDisplay()}
                </div>
                {!cart || cart && !cart.items.length > 0 ? <> <hr /> {emptyCartFooter()} </> : null}

            </>
        )
    }

    const paymentSection = () => {
        return (
            <>
                <Stripe cart={cart}/>
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