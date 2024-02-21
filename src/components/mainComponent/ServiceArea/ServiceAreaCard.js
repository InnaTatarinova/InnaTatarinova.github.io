import React from "react";
import { Link } from "react-router-dom";

export const ServiceAreaCard = (props) => {
  return (
    <>
      <li className={`serviceAreaCardItem-conteiner ${props.gridName}`}>
        <img
          className="serviceAreaCardItem-img"
          src={props.img}
          alt={props.alt}
        />
        <div className="serviceAreaCardItem-text">
          <h5>{props.text}</h5></div>
      </li>
    </>
  );
};
