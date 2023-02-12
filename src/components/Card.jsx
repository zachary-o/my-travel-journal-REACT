import React from "react";
import pin from "../assets/images/Fill 219.png"

const Card = (props) => {

  return (
    <>
      <div className="card-info">
        <img
          src={props.item.imageUrl}
          alt={props.item.title}
          className="location-photo"
        />
        <div className="location-info">
          <div className="location">
            <img src={pin} alt="pin" className="pin" />
            <p className="country">{props.item.location}</p>
            <a href={props.item.googleMapsUrl} className="location-google">
              View on Google Maps{" "}
            </a>
          </div>
          <h1>{props.item.title}</h1>
          <p className="dates">{props.item.startDate} - {props.item.endDate}</p>
          <p className="description">{props.item.description}</p>
        </div>
      </div>
    </>
  );
};

export default Card;
