import { useState } from 'react';
import React from 'react'
import './AboutMe.css';

const AboutMe = () => {
    const [show,setShow] = useState(false);
    const [myName,setMyName] = useState('');

    const toggleName = () => {
        if (!show) {
            setMyName(`Timothy Thomas Information`);
            setShow(!show);
        }
        else{
            setMyName('');
            setShow(!show);
        }

    };

    return (
        <div className="about-me">
            <div><button onClick={toggleName}>About Me</button></div>
            <div>
                <h4>{myName}</h4>
            </div>
        </div>
    )
}

export default AboutMe