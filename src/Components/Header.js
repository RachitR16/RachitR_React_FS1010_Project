import React from 'react';
import './Header.css';
// import './About.js';

function Header(){
    return (
        <div className="head">

            <img src="/images/background.jpg"/>
           
            <div className="menu">
                <ul id="nav" className="nav">
                    <li><a className="smoothscroll" href="#home">Home</a></li>
                    <li><a className="smoothscroll" href="#about">About</a></li>
                    <li><a className="smoothscroll" href="#resume">Resume</a></li>
                    <li><a className="smoothscroll" href="#work">Work</a></li>
                    <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul>
            </div>

            <div className="title">
                <h1>Rachit Raval</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit cupiditate ad ratione numquam eligendi.</p>
            </div>

            <div className="icons">
                <i class="fab fa-twitter" class="icons" aria-hidden="true"></i>
                <i class="fab fa-facebook-f" class="icons" aria-hidden="true"></i>
                <i class="fab fa-linkedin-in" class="icons" aria-hidden="true"></i>
                <i class="fab fa-instagram" class="icons" aria-hidden="true"></i>
            </div>  
            
                       
        </div>
    )
}

export default Header;