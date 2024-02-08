import React, { useContext } from "react";
import "../ElementsForQuote.scss";
import { MovingFormContext } from "../../../../context/MovingFormContext";
import { ItemForChoose } from "../ElementForFormQuote/ItemForChoose";

export const Hours = () => {
  const { hours } = useContext(MovingFormContext);

  const classNameSpan = "spanChoosenItem";
  const className = "typeWidthForSix";
  const type = "HOURS";
  const icon = "no";

  return (
    <div>
      <span>How many hours</span>
      <div className="adContainerForQuote">
        <ItemForChoose
          name="3 hours"
          value={3}
          icon={icon}
          type={type}
          context={hours}
          classNameSpan={classNameSpan}
          className={className}
        />
        <ItemForChoose
          name="4 hours"
          value={4}
          icon={icon}
          type={type}
          context={hours}
          classNameSpan={classNameSpan}
          className={className}
        />
        <ItemForChoose
          name="5 hours"
          value={5}
          icon={icon}
          type={type}
          context={hours}
          classNameSpan={classNameSpan}
          className={className}
        />
        <ItemForChoose
          name="6 hours"
          value={6}
          icon={icon}
          type={type}
          context={hours}
          classNameSpan={classNameSpan}
          className={className}
        />
        <ItemForChoose
          name="7 hours"
          value={7}
          icon={icon}
          type={type}
          context={hours}
          classNameSpan={classNameSpan}
          className={className}
        />
        <ItemForChoose
          name="8 hours"
          value={8}
          icon={icon}
          type={type}
          context={hours}
          classNameSpan={classNameSpan}
          className={className}
        />
      </div>
    </div>
  );
};
