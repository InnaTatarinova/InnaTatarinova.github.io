import React from "react";
import { Link } from "react-router-dom";

export const CardItemComponent = (props) => {
  return (
    <>
      <li className={`cardItem-conteiner ${props.classNameForContainer}`}>
        <Link to={props.path} className="cardItem-link">
          {props.showImg === "no" ? null : (
            <img
              className={`cardItem-img ${props.classNameForImg}`}
              src={props.img}
              alt={props.value.alt}
            />
          )}
          <div className="cardItem-text-conteiner">
            <h5 className={`cardItem-text ${props.classNameForText}`}>
              {props.value.name}
            </h5>
          </div>
        </Link>
      </li>
    </>
  );
};
