import React, { useContext } from "react";
import { ItemForChoose } from "../ElementForFormQuote/ItemForChoose";
import { MovingFormContext } from "../../../../context/MovingFormContext";

const list2 = ["bi-person", "bi-person"];
const list3 = ["bi-person", "bi-person", "bi-person"];
const list4 = ["bi-person", "bi-person", "bi-person", "bi-person"];
const list5 = ["bi-person", "bi-person", "bi-person", "bi-person", "bi-person"];

export const MoversQuantity = () => {
  const { movers } = useContext(MovingFormContext);

  const className = "typeWidthForFour";
  const type = "MOVERS";
  const icon = "iconList";
  const classNameIcon = "bi-person";

  return (
    <div>
      <span>Choose movers</span>
      <div className="adContainerForQuote">
        <ItemForChoose
          name="2 movers"
          value={2}
          context={movers}
          icon={icon}
          type={type}
          className={className}
          iconList={list2}
          classNameIcon={classNameIcon}
        />
        <ItemForChoose
          name="3 movers"
          value={3}
          context={movers}
          icon={icon}
          type={type}
          className={className}
          classNameIcon={classNameIcon}
          iconList={list3}
          classNameIconList="iconListFor3"
        />
        <ItemForChoose
          value={4}
          name="4 movers"
          context={movers}
          icon={icon}
          type={type}
          className={className}
          classNameIcon={classNameIcon}
          iconList={list4}
          classNameIconList="iconListFor4"
        />
        <ItemForChoose
          name="5 movers"
          value={5}
          context={movers}
          icon={icon}
          type={type}
          className={className}
          classNameIcon={classNameIcon}
          iconList={list5}
          classNameIconList="iconListFor5"
        />
      </div>
    </div>
  );
};
