import React, { useContext } from "react";
import "../FormForQuote/ElementsForQuote.scss";
import { combineAddress } from "../../../function/combineAddress";
import { MovingFormContext } from "../../../context/MovingFormContext";

export const BlockForInputQuote = (props) => {
  const { dispatch } = useContext(MovingFormContext);

  const changeValue = () => {
    if (props.value !== null) {
      dispatch({
        type: props.type,
        payload: null,
      });
    }
  };

  return (
    <div className={`quoteInputLine ${props.gridName}`} onClick={changeValue}>
      {props.form === "full" ?  <div className="inputName"> {props.name}</div> : null}
     

      {props.value === null ? (
        props.component
      ) : props.componentType === "address" ? (
        <div className={props.className}>{combineAddress(props.value)}</div>
      ) : props.componentType === "serviceType" ? (
        <div className={props.className}>{props.value.name}</div>
      ) : null}
    </div>
  );
};
