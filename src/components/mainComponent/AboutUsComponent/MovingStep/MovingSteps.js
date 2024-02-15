import React from "react";
import arrow from "../../../../assets/img/poster/arrowBlue.png";
import arrowLeft from "../../../../assets/img/poster/arrowBlueToLeft.png";
import { CardForMovingStep } from "./CardForMovingStep";
import "../AboutUsComponent.scss";
import consultation from "../../../../assets/img/aboutUs/consultation.jpg";
import loading from "../../../../assets/img/aboutUs/loading2.jpg";
import unloading from "../../../../assets/img/aboutUs/unloading2.jpg";
import packing from "../../../../assets/img/aboutUs/packing.jpg";
import hauling from "../../../../assets/img/aboutUs/hauling.jpg";

export const MovingSteps = () => {
  // const [firstContExplanation, setFirstContactExplanation] = useState(false);

  // const showFirstContact = () => {
  //   setFirstContactExplanation(!firstContExplanation);
  // };

  return (
    <div className="movingStep-container">
      <CardForMovingStep id={1} src={consultation} />

      <img src={arrow} alt="arrow" className="arrowStyle"></img>

      <CardForMovingStep className="moveToRight" id={2} src={packing} />

      <img
        src={arrowLeft}
        alt="arrow"
        className="arrowStyle moveToRightArrow"
      ></img>

      <CardForMovingStep id={3} src={loading} />

      <img src={arrow} alt="arrow" className="arrowStyle"></img>

      <CardForMovingStep className="moveToRight" id={4} src={unloading} />

      <img
        src={arrowLeft}
        alt="arrow"
        className="arrowStyle moveToRightArrow"
      ></img>

      <CardForMovingStep id={5} src={hauling} />
    </div>
  );
};
