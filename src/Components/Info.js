import React from 'react';
import './Info.css'

function Info(props){
    return (
        <div className="Info">
            <div className="res">
                <h2 className="name">{props.name}</h2>
                <h2 className="tag">{props.tag}</h2>
                <h2 className="detail">{props.detail}</h2>
            </div>
        </div>
    )
}

export default Info;