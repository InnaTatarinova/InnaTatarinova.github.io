import React from "react";
import { useFormContext } from "react-hook-form";
import { InputError } from "./InputError";
import { findInputError } from "./FindInputError";
import { isFormInvalid } from "../IsFormValid";
import { AnimatePresence } from "framer-motion";
import "./Input.scss";

export const Input = ({
  type,
  id,
  placeholder,
  validation,
  name,
  multiline,
  className,
  setValue,
  value,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputError = findInputError(errors, name);
  const isInvalid = isFormInvalid(inputError);

  return (
    <div className={className}>

   
      {multiline ? (
        <textarea
          id={id}
          type={type}
          className="form-input form-message"
          placeholder={placeholder}
          {...register(`${name}`, validation)}
          value={value}
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          className="form-input"
          placeholder={placeholder}
          {...register(`${name}`, validation)}
          onChange={(event) => {
            setValue(event.target.value);
            
          }}
        ></input>
      )}
      <AnimatePresence mode="wait" initial={false}>
        {isInvalid && (
          <InputError
            message={inputError.error.message}
            key={inputError.error.message}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
