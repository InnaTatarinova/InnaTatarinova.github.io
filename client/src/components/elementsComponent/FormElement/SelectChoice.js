import React, { useContext } from "react";
import "./SelectChoice.scss";
import { serviceTypeList } from "../../../data/serviceType";
import { MovingFormContext } from "../../../context/MovingFormContext";

export const SelectChoice = (props) => {
  const { dispatch } = useContext(MovingFormContext);

  const selectService = (e, value) => {
    dispatch({
      type: props.type,
      payload: value,
    });

    props.showSelectForm(false);
  };
  return (
    <ul className={props.className}>
      {serviceTypeList.map((value, key) => {
        return (
          <li key={key} onClick={(event) => selectService(event, value)}>
            {value.name}
          </li>
        );
      })}
    </ul>
  );
};
