import React from "react";
import location from "../assets/location.svg"

export default function Card(props) {
    props = props.objectInfo;

    return (
        <div className="card">
            <div className="card-img">
                <img src={props.imageUrl} />
            </div>
            <div className="card-info">
                <div className="card-destination">
                    <div>
                        <img src={location} />
                        <p><strong>{props.location.toUpperCase()}</strong></p>
                        <a href={props.googleMapsUrl}>View on Google Maps</a>
                    </div>
                    <h1 className="card-title">{props.title}</h1>
                </div>
                <div>
                    <p className="card-dates">{props.startDate} - {props.endDate}</p>
                    <p className="card-desc">{props.description}</p>
                </div>
            </div>
        </div>
    );
}