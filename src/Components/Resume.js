import React from 'react';
import './Resume.css';
import Info from "./Info.js";

function Resume(){
    return (
        <div className="resume" id="resume">
            <h1 className="resName">education</h1>
            <Info name="York University" tag="Full Stack Development • April 2020" detail="Have been working with, and anything else that would be useful for an employer to know." />
            <hr/>
            <Info name="Seneca Collage" tag="Visual Effects for Film and Television • April 2013" detail="Technologies you have been working with, and anything else that would be useful " />
            <h1 className="resName">work</h1>
            <Info name="Take 5 Production" tag="VFX Compositor • March 2020 - Present" detail="Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know." />
            <hr/>
            <Info name="Jam Filled Studio" tag="Sr. Lighter/Compositor - February 2019" detail="Describe work, special projects, notable achievements, what technologies you have been working with, and anything else that would be useful for an employer to know." />            
        </div>
    )
}

export default Resume;