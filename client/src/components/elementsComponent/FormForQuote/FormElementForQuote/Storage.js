import React, { useContext } from "react";
import { ItemForChoose } from "../../ItemForChoose/ItemForChoose";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const Storage = () => {
  const { storage } = useContext(MovingFormContext);

  const classNameSpan = "spanChoosenItem";
  const className = "typeWidthForSix";
  const type = "STORAGE";
  const icon = "no";

  return (
    <div>
      <span>What is storage size?</span>
      <div className="adContainerForQuote">
        <ItemForChoose
          name="5' X 5'"
          value="5*5"
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm = {MovingFormContext}
        />
        <ItemForChoose
          name="5' X 10'"
          value="5*10"
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm = {MovingFormContext}
        />
        <ItemForChoose
          name="10' X 10'"
          value="10*10"
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm = {MovingFormContext}
        />
        <ItemForChoose
          name="10' X 15'"
          value="10*15"
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm = {MovingFormContext}
        />
        <ItemForChoose
          name="10' X 20'"
          value="10*20"
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm = {MovingFormContext}
        />
        <ItemForChoose
          name="10' X 25'"
          value="10*25"
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm = {MovingFormContext}
        />
         <ItemForChoose
          name="10' X 30'"
          value="10*30"
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm = {MovingFormContext}
        />
          <ItemForChoose
          name="20' X 20'"
          value="20*20"
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm = {MovingFormContext}
        />
         <ItemForChoose
          name="30' X 30'"
          value="20*20"
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm = {MovingFormContext}
        />
      </div>
    </div>
  );
};
