import React from "react";
import "./CardForMovingStep.scss";
import { movingStep } from "../../../../data/abouUsInfo";

export const CardForMovingStep = (props) => {
  return (
    <div className={`blockForMovingStep ${props.className}`}>
      {movingStep
        .filter((listInit) => {
          if (listInit.id === props.id) {
            return listInit;
          }
          return "";
        })
        .map((val, key) => {
          return (
            <div key={key}>
              <div className="front">
                <img src={props.src} alt="service" className="frontImg" />
                <p>{val.name}</p>
              </div>
              <div className="back">
                {val.step.map((el, key) => {
                  return <span key={key}>{el.value}</span>;
                })}
              </div>
            </div>
          );
        })}
    </div>
  );
};
