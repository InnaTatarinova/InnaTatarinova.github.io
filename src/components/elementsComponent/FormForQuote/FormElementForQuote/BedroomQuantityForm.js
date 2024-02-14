import React, { useContext } from "react";
import "../ElementsForQuote.scss";
import { ItemForChoose } from "../../ItemForChoose/ItemForChoose";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const BedroomQuantityForm = () => {
  const { bedroomQuantity } = useContext(MovingFormContext);
  const classNameSpan = "spanChoosenItem";
  const className = "typeWidthForSix";
  const type = "BEDROOM_QUANTITY";
  const icon = "no";
  const showRecomType = "SHOW_RECOM";
  const showRecom = "yes";
  const mainContextForm = {MovingFormContext}

  return (
    <div>
      <span>How many bedroom</span>
      <div className="adContainerForQuote">
        <ItemForChoose
          name="1"
          value= {1}
          icon={icon}
          type={type}
          classNameSpan={classNameSpan}
          className={className}
          context={bedroomQuantity}
          showRecom = {showRecom}
          showRecomType = {showRecomType}
          mainContextForm={mainContextForm}
          
         
        />
        <ItemForChoose
          name="2"
          value={2}
          icon={icon}
          type={type}
          classNameSpan={classNameSpan}
          className={className}
          context={bedroomQuantity}
          showRecom = {showRecom}
          showRecomType = {showRecomType}
          mainContextForm={mainContextForm}
        />
        <ItemForChoose
          name="3"
          value={3}
          icon={icon}
          type={type}
          classNameSpan={classNameSpan}
          className={className}
          context={bedroomQuantity}
          showRecom = {showRecom}
          showRecomType = {showRecomType}
          mainContextForm={mainContextForm}
        />
        <ItemForChoose
          name="4"
          value={4}
          icon={icon}
          type={type}
          classNameSpan={classNameSpan}
          className={className}
          context={bedroomQuantity}
          showRecom = {showRecom}
          showRecomType = {showRecomType}
          mainContextForm={mainContextForm}
        />
         <ItemForChoose
          name="5"
          value={5}
          icon={icon}
          type={type}
          classNameSpan={classNameSpan}
          className={className}
          context={bedroomQuantity}
          showRecom = {showRecom}
          showRecomType = {showRecomType}
          mainContextForm={mainContextForm}
        />
         <ItemForChoose
          name="6"
          value={6}
          icon={icon}
          type={type}
          classNameSpan={classNameSpan}
          className={className}
          context={bedroomQuantity}
          showRecom = {showRecom}
          showRecomType = {showRecomType}
          mainContextForm={mainContextForm}
        />
      </div>
    </div>
  );
};
