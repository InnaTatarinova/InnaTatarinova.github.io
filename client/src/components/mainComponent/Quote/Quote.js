import React from "react";
import "./Quote.scss";
import { FormForFullQuote } from "../../elementsComponent/FormForQuote/FormForFullQuote";

export const Quote = () => {
  return (
    <div id="quote" className="quote_component">
      <h2 className="quote-title">Approximate Quote </h2>
      <FormForFullQuote />
    </div>
  );
};
