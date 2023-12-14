import React from "react";
import { useState } from "react";
import ReactWhatsappButton from "react-whatsapp-button";
import "./FormForQuote.scss";
import { ButtonComponent } from "../../elementComponents/ButtonComponents/ButtonComponnet";
import { Input } from "../../elementComponents/ButtonComponents/FormElement/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  addressFrom_validation,
  addressTo_validation,
  phoneNumber_validation,
} from "../../elementComponents/ButtonComponents/FormElement/InputValidation";

export const FormForQuote = () => {
  const methods = useForm();
  const [success, setSuccess] = useState(false);

  const onSubmit = methods.handleSubmit((data) => {
    console.log(data);
    methods.reset();
    setSuccess(true);
  });

  return (
    <FormProvider {...methods}>
      <form
        className="formQuote"
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
      >
        <Input {...addressFrom_validation} className="inputFrom" />
        <Input {...addressTo_validation} className="inputTo" />
        <div className="chooseMovingType">
          <div className="chooseMovingTypeName">Choose service type</div>
          <i className="bi bi-caret-down-fill"></i>
        </div>

        <div className="submitBTN">
          {success && (
            <p className="infoSuccess">Form has been submitted successfully</p>
          )}
          <div>
            <ButtonComponent
              btnSize="btn-large"
              btnColor="btn-red"
              btnBorder="btn-border-light"
              btnHoverStyle="btn-lightHoverTheme"
              onClick={onSubmit}
            >
              Get Quote
            </ButtonComponent>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
