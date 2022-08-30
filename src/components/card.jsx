import React from "react";

function Card(props) {
    console.log(props)

    return (
        <div className="card">
            <img className="card-img" src={`src/assets/images/${props.img}`} alt={`Picture of ${props.title}`} />
            <div className="card-info">
                <span className="card-location"></span>
                <span className="card-map"></span>
                    <h2 className="card-title">{props.title}</h2>
                <details open>
                    <summary>Trip info</summary>
                    <p className="card-duration"><b>{props.duration}</b></p>
                    <p className="card-desc">{props.description}</p>
                </details>
            </div>
        </div>
    )
}

export default Card