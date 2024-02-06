import React, { useContext } from "react";
import { ItemForChoose } from "../ElementForFormQuote/ItemForChoose";
import "../ElementsForQuote.scss";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const LocalResidentForm = () => {
  const { residenceType } = useContext(MovingFormContext);
  const className = "typeWidthForFour";
  const type = "RESIDENCE_TYPE";
  const icon = "icon";
  const classNameIcon = "bi-house-door";

  return (
    <div>
      <span>Choose residence type</span>
      <div className="adContainerForQuote">
        <ItemForChoose
          name="House"
          value="House"
          classNameIcon={classNameIcon}
          context={residenceType}
          icon={icon}
          type={type}
          className={className}
        />
        <ItemForChoose
          name="Apartment"
          value="Apartment"
          classNameIcon={classNameIcon}
          context={residenceType}
          icon={icon}
          type={type}
          className={className}
        />
        <ItemForChoose
          name="Condo"
          value="Condo"
          classNameIcon={classNameIcon}
          context={residenceType}
          icon={icon}
          type={type}
          className={className}
        />
        <ItemForChoose
          name="Storage"
          value="Storage"
          classNameIcon={classNameIcon}
          context={residenceType}
          icon={icon}
          type={type}
          className={className}
        />
      </div>
    </div>
  );
};
