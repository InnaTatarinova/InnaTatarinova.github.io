import React from "react";
import "./ButtonComponent.scss";

export const ButtonComponent = ({
  children,
  className,
  btnStyle,
  btnSize,
  btnColor,
  btnBorder,
  onClick,
  disabled,
}) => {
  const STYLES = ["", "btn-transparent"];
  const SIZES = ["btn-medium", "btn-small", "btn-large"];
  const BORDER = ["", "btn-border-light", "btn-border-dark"];
  const COLOR = ["btn-light", "btn-dark"];
  const CLASSNAME = ["", "visiblePhoneNumber"];

  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
  const checkBtnBorder = BORDER.includes(btnBorder) ? btnBorder : BORDER[0];
  const checkBtnColor = COLOR.includes(btnColor) ? btnColor : COLOR[0];
  const checkBtnClassName = CLASSNAME.includes(className)
    ? className
    : CLASSNAME[0];

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btnMain ${checkBtnClassName} ${checkBtnStyle} ${checkBtnSize} ${checkBtnBorder} ${checkBtnColor}`}
    >
      {children}
    </button>
  );
};
