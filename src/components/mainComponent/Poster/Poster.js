import React from "react";
import "./Poster.scss";
import { ButtonComponent } from "../../elementsComponent/ButtonComponents/ButtonComponnet";
import { Link } from "react-router-dom";

export const Poster = (props) => {
  return (
    <div className="poster-container">
      <img
        src={props.srcMain}
        alt={props.altMain}
        className="poster-container-img"
      ></img>
      <h1 className="poster-h1">{props.name}</h1>
      <h3 className={`poster-h3 ${props.classNameH3}`}>Your moving starts here</h3>
      <div>
        <img
          src={props.srcImg}
          alt={props.altImg}
          className="poster-addPicture"
        ></img>
      </div>

      <Link to="/#quote" className="btnLink">
        Get Quote
      </Link>
    </div>
  );
};
