import React from "react";
import "./ServicePageInformation.scss";
import { phoneNumber } from "../../../data/mainInfo";
import { Link } from "react-router-dom";
import { serviceInformation } from "../../../data/serviceTypeInformation.js";

export const ServicePageInformation = (props) => {
  const phoneNumberDial = () => {
    window.location.href = `tel://${phoneNumber}`;
  };

  return (
    <div className="servicePage-component">
      {serviceInformation
        .filter((listInit) => {
          if (listInit.id === props.id) {
            return listInit;
          }
          return "";
        })
        .map((val, key) => {
          return (
            <div key={key}>
              <section>
                <p>
                  {val.introductionStart}
                  <span className="highlight"> {val.companyName}</span>
                  {val.introductionEnd}
                </p>
              </section>
              <section>
                <h1 className="servicePage-title">
                  Why Choose KL CARGO {val.name}?
                </h1>
                {val.reason.map((item, key) => {
                  return (
                    <div key={key}>
                      <p>
                        <span className="highlightRed">
                          {item.id}. {item.title}
                        </span>
                        {item.text}
                      </p>
                      <ul>
                        {item.list !== undefined
                          ? item.list.map((item, key) => {
                              return (
                                <li key={key}>
                                  <span className="highlight">
                                    {item.title}
                                  </span>
                                  {item.text}
                                </li>
                              );
                            })
                          : null}
                      </ul>
                    </div>
                  );
                })}
              </section>
              <section>
                <h3 className="servicePage-title">{val.nameList}</h3>
                <ul>
                  {val.listItem.map((item, key) => {
                    return (
                      <li key={key}>
                        <span className="highlightRed">{item.textName}</span>
                        {item.textDescr}
                      </li>
                    );
                  })}
                </ul>
              </section>
              <section className="sectionForQuote">
                {props.quote === "no" ? (
                  <div
                    className="servicePage-title linkStyle backgroundDark highlightWhite"
                    onClick={phoneNumberDial}
                  >
                    Get Started Today!
                  </div>
                ) : (
                  <Link className="linkStyle" to="/quote">
                    <p className="servicePage-title highlightWhite">
                      Get Your Free Quote Today!
                    </p>
                  </Link>
                )}
                <p>
                  Contact us at{" "}
                  <span className="highlight" onClick={phoneNumberDial}>
                    {phoneNumber}
                  </span>{" "}
                  {val.endText}
                </p>
              </section>
            </div>
          );
        })}
    </div>
  );
};
