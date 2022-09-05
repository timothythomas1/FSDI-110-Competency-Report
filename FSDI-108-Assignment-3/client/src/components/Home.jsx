import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
    return (
        <div className="home">
            <div className="banner-1">
                <div className="banner-text">
                    <h1>Welcome to the Swell</h1>
                    <Link className="btn btn-success" to="/catalog">
                        Catalog
                    </Link>
                </div>

                <img src="./images/wave-home.jpg" alt="Homepage background image" />

            </div>

        </div>
    )
}

export default Home