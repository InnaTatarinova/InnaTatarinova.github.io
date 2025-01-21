import React, { useContext, useState } from "react";
import { FormContactContext } from "../../../context/FormContactContext";
import { Input } from "../FormElement/Input/Input";

export const BlockForInputContact = (props) => {
  // const { dispatch } = useContext(FormContactContext);
  // const [value, setValue] = useState(props.valueContext);

  const saveValue = (e) => {
    if (e.target.value.length === 1 && props.wasSentSuccessfuly === true) {
      props.setSuccess(false);
    }
    props.setValue(e.target.value);
    
    // dispatch({
    //   type: props.type,
    //   payload: e.target.value,
    // });
  };

  return (
    <div onChange={saveValue} className={props.className}>
      <Input
        {...props.validation}
        // className={props.className}
        setValue={props.setValue}
        value={props.value}
      />
    </div>
  );
};
