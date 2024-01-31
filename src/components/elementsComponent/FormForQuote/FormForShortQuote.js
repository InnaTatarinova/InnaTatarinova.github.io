import React, { useContext } from "react";
import "./FormForShortQuote.scss";
import "./ElementsForQuote.scss";
import { FormProvider, useForm } from "react-hook-form";
import { HashLink as Link } from "react-router-hash-link";
import { MovingFormContext } from "../../../context/MovingFormContext";
import { BlockForInput } from "../FormElement/BlockForInput";
import {
  movingFromComponent,
  movingToComponent,
  serviceTypeComponent,
} from "./MainConstComponentForQuote";

export const FormForShortQuote = () => {
  const methods = useForm();
  const { serviceType, movingFromInput, movingToInput } =
    useContext(MovingFormContext);

  const onSubmit = methods.handleSubmit((data) => {
    methods.reset();
  });

  return (
    <FormProvider {...methods}>
      <form
        className="formShortQuote"
        onSubmit={(e) => e.preventDefault()}
        noValidate
        autoComplete="off"
      >
        <BlockForInput
          name="From:"
          value={movingFromInput}
          component={movingFromComponent}
          componentType="address"
          type="MOVING_FROM"
          form="short"
          className="chossenItemSpan"
        />
        <BlockForInput
          name="To:"
          value={movingToInput}
          component={movingToComponent}
          componentType="address"
          type="MOVING_TO"
          form="short"
          className="chossenItemSpan"
        />
        <BlockForInput
          name="Service:"
          value={serviceType}
          component={serviceTypeComponent}
          componentType="serviceType"
          type="SERVICE_TYPE"
          form="short"
          className="chossenItemSpan"
        />

        <div className="submitBTN" onClick={onSubmit}>
          <Link to="/#quote" className="getQuoteBtn">
            Get Quote
          </Link>
        </div>
      </form>
    </FormProvider>
  );
};
