import React from "react";
import "./MistakeComponent.scss";
import { ButtonComponent } from "../ButtonComponents/ButtonComponnet";

export const MistakeComponent = (props) => {

  const closeMistakeForm = ()=>{
    
    props.setOpenMistakeForm(false);
  }

  return (
    <div className="mistakeComponent">
      {/* Please choose truck size, how many movers and hourse would you prefer */}
      <div className="mistakeMessage">{props.message}</div>
      <ButtonComponent
        btnSize="btn-small"
        btnColor="btn-dark"
        btnBorder="btn-border-light"
        onClick={closeMistakeForm}
      >
        Ok
      </ButtonComponent>
    </div>
  );
};
