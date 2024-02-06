import React, { useContext} from "react";
import "../ElementsForQuote.scss";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const ItemForChoose = (props) => {
  const { dispatch } = useContext(MovingFormContext);

  const chooseItem = () => {
    dispatch({
      type: props.type,
      payload: props.value,
    });
  };

  return (
    <div
      className={
        props.context !== props.value
          ? `type ${props.className}`
          : `type ${props.className} typeChoosen`
      }
      onClick={chooseItem}
    >
      {props.icon === "icon" ? (
        <div>
          <i className={`bi iconType ${props.classNameIcon}`}></i>
        </div>
      ) : props.icon === "iconList" ? (
        <div className="iconList">
          {props.iconList.map((icon, index) => (
            <i key={index} className={`bi iconType ${props.classNameIcon} ${props.classNameIconList}`}></i>
          ))}
        </div>
      ) : null}
      <span className={props.classNameSpan}>{props.name}</span>
    </div>
  );
};
