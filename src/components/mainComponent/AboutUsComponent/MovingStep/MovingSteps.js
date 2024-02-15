import React from "react";
import arrow from "../../../../assets/img/poster/arrowBlue.png";
import arrowLeft from "../../../../assets/img/poster/arrowBlueToLeft.png";
import { CardForMovingStep } from "./CardForMovingStep";
import "../AboutUsComponent.scss";

export const MovingSteps = () => {
  // const [firstContExplanation, setFirstContactExplanation] = useState(false);

  // const showFirstContact = () => {
  //   setFirstContactExplanation(!firstContExplanation);
  // };

  return (
    <div className="movingStep-container">
      <CardForMovingStep
        id={1}
      />

      <img src={arrow} alt="arrow" className="arrowStyle"></img>

      <CardForMovingStep
        className="moveToRight"
        id={2}
      />

      <img
        src={arrowLeft}
        alt="arrow"
        className="arrowStyle moveToRightArrow"
      ></img>

      <CardForMovingStep
         id={3}
      />

      <img src={arrow} alt="arrow" className="arrowStyle"></img>

      <CardForMovingStep
        className="moveToRight"
        id={4}
      />

      <img
        src={arrowLeft}
        alt="arrow"
        className="arrowStyle moveToRightArrow"
      ></img>

      <CardForMovingStep
          id={5}
      />
    </div>
  );
};
