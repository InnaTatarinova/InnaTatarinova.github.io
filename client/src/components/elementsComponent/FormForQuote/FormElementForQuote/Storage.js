import React, { useContext } from "react";
import { ItemForChoose } from "../../ItemForChoose/ItemForChoose";
import { MovingFormContext } from "../../../../context/MovingFormContext";

export const Storage = () => {
  const { storage } = useContext(MovingFormContext);

  const classNameSpan = "spanChoosenItem";
  const className = "typeWidthForSix";
  const type = "STORAGE";
  const icon = "no";
  const showRecomType = "SHOW_RECOM";
  const showRecom = "yes";

  return (
    <div>
      <span>What is storage size?</span>
      <div className="adContainerForQuote">
        <ItemForChoose
          name="5' X 5'"
          value={25}
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm={MovingFormContext}
          showRecom={showRecom}
          showRecomType={showRecomType}
        />
        <ItemForChoose
          name="5' X 10'"
          value={50}
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm={MovingFormContext}
          showRecom={showRecom}
          showRecomType={showRecomType}
        />
        <ItemForChoose
          name="10' X 10'"
          value={100}
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm={MovingFormContext}
          showRecom={showRecom}
          showRecomType={showRecomType}
        />
        <ItemForChoose
          name="10' X 15'"
          value={150}
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm={MovingFormContext}
          showRecom={showRecom}
          showRecomType={showRecomType}
        />
        <ItemForChoose
          name="10' X 20'"
          value={200}
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm={MovingFormContext}
          showRecom={showRecom}
          showRecomType={showRecomType}
        />
        <ItemForChoose
          name="10' X 25'"
          value={250}
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm={MovingFormContext}
          showRecom={showRecom}
          showRecomType={showRecomType}
        />
        <ItemForChoose
          name="10' X 30'"
          value={300}
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm={MovingFormContext}
          showRecom={showRecom}
          showRecomType={showRecomType}
        />
        <ItemForChoose
          name="20' X 20'"
          value={400}
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm={MovingFormContext}
          showRecom={showRecom}
          showRecomType={showRecomType}
        />
        <ItemForChoose
          name="30' X 30'"
          value={900}
          icon={icon}
          type={type}
          context={storage}
          classNameSpan={classNameSpan}
          className={className}
          mainContextForm={MovingFormContext}
          showRecom={showRecom}
          showRecomType={showRecomType}
        />
      </div>
    </div>
  );
};
