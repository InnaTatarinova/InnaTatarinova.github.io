import React, { useContext } from "react";
import { ItemForChoose } from "../ElementForFormQuote/ItemForChoose";
import "../ElementsForQuote.scss";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const LocalResidentForm = () => {
  const { residenceType } = useContext(MovingFormContext);
  const className = "typeWidthForFour";
  const type = "RESIDENCE_TYPE";
  const icon = "icon";
 

  return (
    <div>
      <span>Choose residence type</span>
      <div className="adContainerForQuote">
        <ItemForChoose
          name="House"
          value="House"
          classNameIcon="bi-house-door"
          context={residenceType}
          icon={icon}
          type={type}
          className={className}
        />
        <ItemForChoose
          name="Apartment"
          value="Apartment"
          classNameIcon="bi-building"
          context={residenceType}
          icon={icon}
          type={type}
          className={className}
        />
        <ItemForChoose
          name="Condo"
          value="Condo"
          classNameIcon="bi-building"
          context={residenceType}
          icon={icon}
          type={type}
          className={className}
        />
        <ItemForChoose
          name="Storage"
          value="Storage"
          classNameIcon="bi-box"
          context={residenceType}
          icon={icon}
          type={type}
          className={className}
        />
      </div>
    </div>
  );
};
