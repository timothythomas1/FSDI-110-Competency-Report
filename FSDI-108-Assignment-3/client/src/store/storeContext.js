import { createContext } from "react" //State management library of REACT (IMMUTABLE)

// context describes the data structure
// but doesnt not provide implementation (Meaning the variables will not store any data that anyone can use. It just promises a variable)

// Creating a new object from the built-in constructor function "createContext"
const StoreContext = createContext( //IMMUTABLE: you can't push anything to it. no modification available. That's why we add FUNCTIONS in order to add stuff.
    //Object Literal
    {
        // variables
        cart: [], // Storing the cart in the createContext
        user: {}, // Storing the user in the createContext

        // Methods or Functions to allow us to MODIFY the data above, due to immutablility
        addToCart: () => { },
        removeFromCart: () => { },
    }
);

export default StoreContext;