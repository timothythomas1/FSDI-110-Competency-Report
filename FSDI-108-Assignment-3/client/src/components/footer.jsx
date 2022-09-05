import './footer.css';
import React from 'react'
import AboutMe from './AboutMe';
// A component is a fucntion that ALWAYS returns a JSX. 
const Footer = () => {
    return(
        <div className="footer">
                <div className="footer-icons">
                    <a><i className="fa-brands fa-github fa-2xl"></i></a>
                    <a><i className="fa-brands fa-slack fa-2xl"></i></a>
                    <a><i className="fa-brands fa-stack-overflow fa-2xl"></i></a>
                    <a><i className="fa-solid fa-graduation-cap fa-2xl"></i></a>
                    <a><i className="fa-brands fa-reddit-alien fa-2xl"></i></a>
                    <a><i className="fa-brands fa-discord fa-2xl"></i></a>
                    <a><i className="fa-brands fa-medium fa-2xl"></i></a>
                </div>
                <AboutMe />

                <h5 >TimTek&#8482; - &#169; 2022</h5>
        </div>

    );
}
// In order to work with this component, we need to export the component, so other components can import them and use them.

export default Footer;