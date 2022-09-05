import './Product.css'
import { React, useState, useContext } from 'react'
import QuantityPicker from './QuantityPicker'
import StoreContext from '../store/storeContext';

const Product = (props) => { //This brings all of the properties input into the parent component
    const [quantity, setQuantity] = useState(1);
    const addToCart = useContext(StoreContext).addToCart; // Accessing the context to access addCart function from the global state(context)!

    const handleAddClicked = () => {
        console.log(`Added ${quantity} ${props.data.title} to cart`);
        //create a copy, mod copy, set the copy
        //                                             👇 this quantity gets created then pushed into object
        let propCopy = { ...props.data, quantity: quantity }; //Add products to cart using the Spread Operator (Gathering data from previous save)
        // console.log(propCopy)
        addToCart(propCopy) // execute the variable above. 
    }

    const onQuantityChange = (quantity) => {
        console.log(`Quantity of ${props.data.title} changed to`, quantity);
        setQuantity(quantity);
    }

    const getTotal = () => {
        let total = props.data.price * quantity
        return total.toLocaleString(undefined, { maximumFractionDigits: 2 })
    }

    return (
        <div className="product-container">

            <a href={props.data.link} className="product-heading">
                <img className="product-img" src={"images/" + props.data.image} alt="A Product" />
                <hr></hr>
                <h5 className="product-heading">{props.data.title}</h5>
            </a>
            <p>Each: ${props.data.price.toLocaleString(undefined, { maximumFractionDigits: 2 })}</p>
            {/* 👇 a function that gets called NOW which has a return! */}
            <p>Total: ${getTotal()}</p>

            <div className="controls">
                <div className="d-grid gap-2 col-6 mx-auto">
                    <button onClick={handleAddClicked} id='addCart' className="btn btn-warning" type="submit">Add to cart</button>
                </div>

                <div>                       {/* 👇 a function that gets called LATER! */}
                    <QuantityPicker onChange={onQuantityChange} minimum="1" stock={props.data.stock} />
                </div>
            </div>
        </div>
    )
}

export default Product