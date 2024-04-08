import React from "react";

export const BlockForInformationFromIcon = (props) => {
  return (
    <div className="blockForInformationFromIcon">
      <span className="highlightRed">
        {props.name}
      </span>
      <p>{props.text}</p>
    </div>
  );
};
