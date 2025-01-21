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
    dispatch({
      type:"RESIDENCE_TYPE",
      payload: ""
    });
    dispatch({
      type:"BEDROOM_QUANTITY",
      payload: 0
    });
    dispatch({
      type:"FLOOR_LEVEL",
      payload: 0
    });
    dispatch({
      type:"TRUCK_SIZE",
      payload: null
    });
    dispatch({
      type:"MOVERS",
      payload: 0
    });
    dispatch({
      type:"HOURS",
      payload: 0
    });
    dispatch({
      type:"STORAGE",
      payload: ""
    });
    dispatch({
      type:"PRICE",
      payload: 0
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
