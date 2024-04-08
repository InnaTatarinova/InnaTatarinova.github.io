import React from "react";
import "./MessageComponent.scss";
import { ButtonComponent } from "../ButtonComponents/ButtonComponnet";

export const MessageComponent = (props) => {

  const closeMessageForm = ()=>{   
    props.setOpenMessageForm(false);
    props.setMessage("");
    props.setMessageFormWasOpen(true);
  }

  return (
    <div className={`mistakeComponent ${props.className}`}>
      <div className="mistakeMessage">{props.message}</div>
      <ButtonComponent
        btnSize="btn-small"
        btnColor="btn-dark"
        btnBorder="btn-border-light"
        onClick={closeMessageForm}
      >
        Ok
      </ButtonComponent>
    </div>
  );
};
