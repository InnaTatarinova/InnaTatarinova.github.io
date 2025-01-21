import React from "react";
import "./ScrollBtn.scss";

export const ScrollBtn = (props) => {
  return (
    <div onClick={props.onClick} className="btn-scroll btn-scroll_animated">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="currentColor"
        className="bi bi-chevron-down"
        viewBox="-2 -2 20 20"
      >
        <path
          fillRule="evenodd"
          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
        />
      </svg>
    </div>
  );
};


