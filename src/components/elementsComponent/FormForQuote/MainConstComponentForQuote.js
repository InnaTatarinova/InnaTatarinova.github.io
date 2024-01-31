import { BlockForSelectItem } from "../FormElement/BlockForSelectItem";
import {
    addressFrom_validation,
    addressTo_validation,
  } from "../FormElement/Input/InputValidation";
import { InputWithDropList } from "../FormElement/InputWithDropList";


export const movingFromComponent = (
    <InputWithDropList
      zPosition="zPosition1"
      validat={addressFrom_validation}
      className="inputFrom"
      endpoint="https://localhost:8000/get_map_information"
      type="MOVING_FROM"
    />
  );

 export const movingToComponent = (
    <InputWithDropList
      zPosition="zPosition2"
      validat={addressTo_validation}
      className="inputTo"
      endpoint="https://localhost:8000/get_map_information"
      type="MOVING_TO"
    />
  );

 export const serviceTypeComponent = (
    <BlockForSelectItem
      className="chooseMovingType"
      name="Choose service type"
      type="SERVICE_TYPE"
    />
  );