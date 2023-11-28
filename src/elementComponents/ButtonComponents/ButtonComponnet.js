import React from "react";
import "./ButtonComponent.scss";

export const ButtonComponent = ({
  children,
  className,
  btnStyle,
  btnSize,
  btnColor,
  btnForm,
  onClick,
  disabled,
}) => {
  const STYLES = [
    "btn-standart",
    "btn-standart-black",
    "btn-outline-light",
    "btn-outline-dark",
  ];
  const SIZES = ["btn-medium", "btn-small", "btn-large"];
  const FORM = ["btn-rectangle", "btn-ellipse"];
  const COLOR = ["btn-light", "btn-dark"];
  const CLASSNAME = [""];

  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];

  const checkBtnForm = FORM.includes(btnForm) ? btnForm : FORM[0];
  
  const checkBtnColor = COLOR.includes(btnColor) ? btnColor : COLOR[0];

  const checkBtnClassName = CLASSNAME.includes(className)
    ? className
    : CLASSNAME[0];

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btnMain ${checkBtnClassName} ${checkBtnStyle} ${checkBtnSize} ${checkBtnForm} ${checkBtnColor}`}
    >
      {children}
    </button>
  );
};
