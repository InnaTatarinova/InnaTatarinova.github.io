import React, { useContext } from "react";
import "./FormForFullQuote.scss";
import "./ElementsForQuote.scss";
import { MovingFormContext } from "../../../context/MovingFormContext";
import { FormProvider, useForm } from "react-hook-form";
import { BlockForInput } from "../FormElement/BlockForInput";
import { movingFromComponent, movingToComponent, serviceTypeComponent } from "./MainConstComponentForQuote";
import { LocalResidentForm } from "./ElementsForQuote/LocalResidentForm";

export const FormForFullQuote = () => {
  const methods = useForm();

  const { movingFromInput, movingToInput, serviceType } =
    useContext(MovingFormContext);

  return (
    <FormProvider {...methods}>
      <form className="quoteFullForm">
        <BlockForInput
          name="From:"
          value={movingFromInput}
          component={movingFromComponent}
          componentType="address"
          type="MOVING_FROM"
          form="full"
        />
        <BlockForInput
          name="To:"
          value={movingToInput}
          component={movingToComponent}
          componentType="address"
          type="MOVING_TO"
          form="full"
        />
        <BlockForInput
          name="Service:"
          value={serviceType}
          component={serviceTypeComponent}
          componentType="serviceType"
          type="SERVICE_TYPE"
          form="full"
        />
        {serviceType === null ? null : (serviceType.id ===1 ? <LocalResidentForm/> : null)}


      
      </form>
    </FormProvider>
  );
};
