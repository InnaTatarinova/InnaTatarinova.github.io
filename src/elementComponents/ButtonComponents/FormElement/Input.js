import React from "react";
import { useFormContext } from "react-hook-form";
import { InputError } from "./InputError";
import { findInputError } from "../FormElement/FindInputError";
import { isFormInvalid } from "../FormElement/IsFormValid";
import { AnimatePresence } from "framer-motion";
import "./Input.scss";

export const Input = ({
  type,
  id,
  placeholder,
  label,
  validation,
  pattern,
  name,
  multiline,
  className,
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
        ></textarea>
      ) : (
        <input
          id={id}
          type={type}
          className="form-input"
          placeholder={placeholder}
          {...register(`${name}`, validation)}
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
