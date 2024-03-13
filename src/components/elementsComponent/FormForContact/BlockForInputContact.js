import React, { useContext, useState } from "react";
import { FormContactContext } from "../../../context/FormContactContext";
import { Input } from "../FormElement/Input/Input";

export const BlockForInputContact = (props) => {
  const { dispatch } = useContext(FormContactContext);
  const [value, setValue] = useState("");

  const saveValue = (e) => {
    setValue(e.target.value);
    
    if (props.value !== null) {
      dispatch({
        type: props.type,
        payload: e.target.value,
      });
    }

  };

  return (
    <div onChange={saveValue}>
      <Input
        {...props.validation}
        className={props.className}
        setValue={setValue}
        value={value}
      />
    </div>
  );
};
