import React, { useContext, useState } from "react";
import { Input } from "../../FormElement/Input/Input";
import { number_validation } from "../../FormElement/Input/InputValidation";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const Floor = (props) => {
  const [value, setValue] = useState(0);
  const { dispatch } = useContext(MovingFormContext);

  const setFloor = () => {
    dispatch({
      type: props.type,
      payload: value,
    });
  };

  return (
    <div className="floorForm-component" onblur={setFloor}>
      <span>{props.name}</span>
      <Input
        {...number_validation}
        setValue={setValue}
        value={value}
        className="floor-input"
      />
    </div>
  );
};
