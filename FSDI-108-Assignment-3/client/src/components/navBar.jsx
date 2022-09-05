import React from 'react'
// import './navBar.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import StoreContext from '../store/storeContext'
// A component is a fucntion that ALWAYS returns a JSX. 

const NavBar = () => {
    const cart = useContext(StoreContext).cart; // Getting the cart from context and storing it in a variable

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

    return (
        <div className="nav-bar">

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><i className="fa-solid fa-house-tsunami"></i>    Swell</Link>
                    <button className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/catalog">Catalog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/list">List</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/admin">Admin</Link>
                            </li>
                        </ul>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link className="nav-link" to="/about">About</Link>
                                </li>
                            </ul>
                            <form className="d-flex">
                                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" /> */}
                                <Link className="btn btn-outline-success" to="/cart">
                                    {getNumItems()} &nbsp; View Cart</Link>
                            </form>
                        </div>

                    </div>
                </div>
            </nav>

            <h2>Welcome to Swell</h2>

        </div >
    )
}
// In order to work with this component, we need to export the component, so other components can import them and use them.
export default NavBar;