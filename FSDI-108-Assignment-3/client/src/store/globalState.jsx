import StoreContext from "./storeContext";
import { useState } from 'react'
// Props 👇 grabbing data from global state
const GlobalState = (props) => {
    const [cart, setCart] = useState([]); // This is how we store a variable in this component
    const [user, setUser] = useState({}); // This is how we store a variable in this component

    const addToCart = (prod) => {
        console.log('Added to cart');
        let placeHolder = [...cart]; //Add products to cart using the Spread Operator (Gathering data from previous save)
        //create a copy, mod copy, set the copy
        let exists = false;
        for (let i = 0; i < cart.length; i++) {
            let item = cart[i];

            if (item._id === prod._id) { // If we already have a product with the same id, then just increase the quantity variable. 
                exists = true;
                item.quantity += prod.quantity;
            }
        }

        if (!exists) { // If the for loop above didnt find the item with the same id, push the new item
            placeHolder.push(prod); //
        }

        setCart(placeHolder);
    };
    const removeFromCart = () => { };

    return (
        <StoreContext.Provider value={{
            // Accessing (Fullfilling) the variables in the constructor promised in the storeContext file
            cart: cart,
            user: user,

            // Accessing (Fullfilling) the functions in the constructor promised in StoreContext file
            addToCart: addToCart,
            removeFromCart: removeFromCart,
        }}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default GlobalState;