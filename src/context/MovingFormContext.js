import React, { createContext, useReducer } from "react";

const MovingFormReducer = (state, action) => {
  switch (action.type) {
    case "MOVING_FROM":
      return {
        ...state,
        movingFromInput: action.payload,
      };
    case "MOVING_TO":
      return {
        ...state,
        movingToInput: action.payload,
      };
    case "SERVICE_TYPE":
      return {
        ...state,
        serviceType: action.payload,
      };
    case "RESIDENCE_TYPE":
      return {
        ...state,
        residenceType: action.payload,
      };
    case "BEDROOM_QUANTITY":
      return {
        ...state,
        bedroomQuantity: action.payload,
      };
    case "FLOOR_LEVEL":
      return {
        ...state,
        floor: action.payload,
      };
    case "TRUCK_SIZE":
      return {
        ...state,
        truckSize: action.payload,
      };
    case "MOVERS":
      return {
        ...state,
        movers: action.payload,
      };
    case "HOURS":
      return {
        ...state,
        hours: action.payload,
      };
    case "STORAGE":
      return {
        ...state,
        storage: action.payload,
      };
    default:
      return state;
  }
};

const initialMovingForm = {
  movingFromInput: null,
  movingToInput: null,
  serviceType: null,
  residenceType: "",
  bedroomQuantity: "",
  floor: "",
  truckSize: "",
  movers: "",
  hours: "",
  storage: "",
};

export const MovingFormContext = createContext();

export const MovingFormProvider = (props) => {
  const [state, dispatch] = useReducer(MovingFormReducer, initialMovingForm);
  return (
    <MovingFormContext.Provider
      value={{
        movingFromInput: state.movingFromInput,
        movingToInput: state.movingToInput,
        serviceType: state.serviceType,
        residenceType: state.residenceType,
        bedroomQuantity: state.bedroomQuantity,
        floor: state.floor,
        truckSize: state.truckSize,
        movers: state.movers,
        hours: state.hours,
        storage: state.storage,
        dispatch,
      }}
    >
      {props.children}
    </MovingFormContext.Provider>
  );
};
