import React from 'react'
import './Cart.css'
import { useContext } from 'react'
import StoreContext from '../store/storeContext'
import ProductInCart from './ProductInCart';

const Cart = () => {
    let cart = useContext(StoreContext).cart; // Getting the cart array from context and storing it in a variable
    let getNumItems = () => {
        let sum = 0;
        // count the number pf products in cart
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            sum += prod.quantity;
        }
        console.log(sum);
        return sum;
    }
    let getTotal = () => {
        let runningTotal = 0;
        // count the number pf products in cart
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            runningTotal += prod.quantity * prod.price;
        }
        console.log(runningTotal);
        return runningTotal;
    }

    return (
        <div className='cart-container'>
            <h4>Here are the {getNumItems()} items in your cart</h4>
            <div className="parent">
                <div className="products">
                    {cart.map(cart => <ProductInCart key={cart._id} data={cart} />)}
                </div>

                <div className="side-menu">
                    <h3>Ready to Pay?</h3>
                    <h3>Your total is: ${getTotal().toLocaleString(undefined, { maximumFractionDigits: 2 })}</h3>
                    <button id='purchase'
                        className="btn btn-warning"
                        type="submit"
                    >
                        Purchase
                    </button>
                </div>
            </div>

        </div>
    )
}

export default Cart

/** 
 * Create productInCart
 * 
 * Cart page should map cart array into productInCart and send the data
 * 
 * productInCart should recieve the data and display it
 * 
 * 
 * 
 * 
 * */