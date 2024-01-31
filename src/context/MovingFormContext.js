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
    default:
      return state;
  }
};

const initialMovingForm = {
  movingFromInput: null,
  movingToInput: null,
  serviceType: null,
  
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
        dispatch,
      }}
    >
      {props.children}
    </MovingFormContext.Provider>
  );
};
