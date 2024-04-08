import React, { createContext, useReducer } from "react";
import {ourProsList} from "../data/abouUsInfo";

const MainContextFormReducer = (state, action) => {
  switch (action.type) {
    case "PROS_ABOUT_US":
      return {
        ...state,
        prosAboutUs: action.payload,
      };
    default:
      return state;
  }
};

const initialMainContextForm = {
  prosAboutUs:ourProsList[0],
};

export const MainContextFormContext = createContext();

export const MainContextFormProvider = (props) => {
  const [state, dispatch] = useReducer(
    MainContextFormReducer,
    initialMainContextForm
  );
  return (
    <MainContextFormContext.Provider
      value={{
        prosAboutUs: state.prosAboutUs,
        dispatch,
      }}
    >
      {props.children}
    </MainContextFormContext.Provider>
  );
};
