import React from 'react';
import './About.css'

function About(){
    return (
        <section className="about" id="about">
            <div className="content">
                <img className="profile" src="/images/rachit.png" alt="profile_img"/>
                <h2>about me</h2>
                <p className="aboutMe">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita rem ab beatae explicabo, porro similique amet quam earum cupiditate totam molestiae quaerat maxime nam aut nisi reprehenderit voluptatem dolor dolorum.</p>
            </div>
        </section>
    )
}

export default About;