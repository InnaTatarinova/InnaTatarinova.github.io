import React, { createContext, useReducer } from "react";


const FormContactReducer = (state, action) => {
  switch (action.type) {
    case "NAME":
      return {
        ...state,
        name: action.payload,
      };
    case "PHONE":
      return {
        ...state,
        phone: action.payload,
      };
    case "MESSAGE":
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

const initialFormContact = {
  name: "",
  phone: "",
  message: "",
};

export const FormContactContext = createContext();

export const FormContactProvider = (props) => {
  const [state, dispatch] = useReducer(FormContactReducer, initialFormContact);
  return (
    <FormContactContext.Provider
      value={{
        name: state.name,
        phone: state.phone,
        message: state.message,
        dispatch,
      }}
    >
      {props.children}
    </FormContactContext.Provider>
  );
};
