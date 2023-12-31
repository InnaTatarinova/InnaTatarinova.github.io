import React from "react";
import { useState } from "react";
import ReactWhatsappButton from "react-whatsapp-button";
import "./FormForContact.scss";
import { ButtonComponent } from "../../elementComponents/ButtonComponents/ButtonComponnet";
import { Input } from "../../elementComponents/ButtonComponents/FormElement/Input";
import { FormProvider, useForm } from "react-hook-form";
import {
  message_validation,
  name_validation,
  phoneNumber_validation,
} from "../../elementComponents/ButtonComponents/FormElement/InputValidation";

export const FormForContact = () => {
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
        className="formContactUs"
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
       
      >
        <Input {...name_validation} className="inputName" />
        <Input {...phoneNumber_validation} className="inputPhone" />
        <Input {...message_validation} className="inputMessage" />

        <div className="submitBTN">
          {success && (
            <p className="infoSuccess">Form has been submitted successfully</p>
          )}
          <div>
            <ReactWhatsappButton
              countryCode="1"
              phoneNumber="2345678998"
              animated
              onClick={onSubmit}
              
            />

            <ButtonComponent
              btnSize="btn-large"
              btnColor="btn-dark"
              btnBorder="btn-border-light"
              btnHoverStyle="btn-lightHoverTheme"
              onClick={onSubmit}
            >
              Contact us
            </ButtonComponent>
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
