import React from "react";
import "./ButtonComponent.scss";

export const ButtonComponent = ({
  children,
  className,
  btnStyle,
  btnHoverStyle,
  btnSize,
  btnColor,
  btnBorder,
  btnForm,
  onClick,
  disabled,
}) => {
  const STYLES = ["", "btn-transparent"];
  const HOVERSTYLES = ["", "btn-darkHoverTheme", "btn-lightHoverTheme"];
  const SIZES = [" ", "btn-medium", "btn-small", "btn-large"];
  const BORDER = ["", "btn-border-light", "btn-border-dark"];
  const FORM = ["", "btn-circle", "btn-circle-small"];
  const COLOR = ["btn-light", "btn-dark", "btn-red"];
  const CLASSNAME = ["", "visiblePhoneNumber", "clickMe", "getEstimQuoteBtn", "movingPhone"];

  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];
  const checkBtnHoverStyle = HOVERSTYLES.includes(btnHoverStyle) ? btnHoverStyle : STYLES[0];
  const checkBtnSize = SIZES.includes(btnSize) ? btnSize : SIZES[0];
  const checkBtnBorder = BORDER.includes(btnBorder) ? btnBorder : BORDER[0];
  const checkBtnForm = FORM.includes(btnForm) ? btnForm : FORM[0];
  const checkBtnColor = COLOR.includes(btnColor) ? btnColor : COLOR[0];
  const checkBtnClassName = CLASSNAME.includes(className)
    ? className
    : CLASSNAME[0];

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`btnMain ${checkBtnClassName} ${checkBtnHoverStyle} ${checkBtnStyle} ${checkBtnSize} ${checkBtnBorder} ${checkBtnForm} ${checkBtnColor}`}
    >
      {children}
    </button>
  );
};
