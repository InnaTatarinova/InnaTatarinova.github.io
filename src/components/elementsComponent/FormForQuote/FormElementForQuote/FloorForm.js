import React, { useContext, useState } from "react";
import { Input } from "../../FormElement/Input/Input";
import { number_validation } from "../../FormElement/Input/InputValidation";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const FloorForm = () => {
  const [value, setValue] = useState("");
  const { dispatch } = useContext(MovingFormContext);

  const setFloor = (props) => {
    dispatch({
      type: props.type,
      payload: value,
    });
  };

  return (
    <div className="floorForm-component" onblur={setFloor}>
      <span>Floor</span>
      <Input
        {...number_validation}
        setValue={setValue}
        value={value}
        className="floor-input"
      />
    </div>
  );
};
