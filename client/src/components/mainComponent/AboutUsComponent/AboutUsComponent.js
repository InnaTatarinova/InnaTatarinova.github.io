import React, { useContext } from "react";
import "./AboutUsComponent.scss";
import "../Services/ServicesComponentAboutUs.scss";
import { BlockForInformationFromIcon } from "./BlockForInformationFromIcon";
import { ourProsList } from "../../../data/abouUsInfo";
import { ItemForChoose } from "../../elementsComponent/ItemForChoose/ItemForChoose";
import { MainContextFormContext } from "../../../context/MainContext";
import { AboutUsDescrip } from "./AboutUsDescrip";
import { ServiceList } from "../Services/ServiceList";
import { MovingSteps } from "./MovingStep/MovingSteps";

export const AboutUsComponent = () => {
  const { prosAboutUs } = useContext(MainContextFormContext);

  const className = "typeWidthForFour";
  const type = "PROS_ABOUT_US";
  const icon = "icon";

  return (
    <div className="aboutUsComponent">
      
      {/* Info about us*/}
      <AboutUsDescrip />

      {/* Our pros  section*/}
      <section>
        <p className="aboutUs-title">What Sets Us Apart?</p>

        <div className="itemListAboutUs">
          <ItemForChoose
            name=""
            value={ourProsList[0]}
            classNameIcon="bi bi-people"
            context={prosAboutUs}
            icon={icon}
            type={type}
            className={className}
            mainContextForm={MainContextFormContext}
          />
          <ItemForChoose
            name=""
            value={ourProsList[1]}
            classNameIcon="bi bi-person-check"
            context={prosAboutUs}
            icon={icon}
            type={type}
            className={className}
            mainContextForm={MainContextFormContext}
          />
          <ItemForChoose
            name=""
            value={ourProsList[2]}
            classNameIcon="bi bi-safe"
            context={prosAboutUs}
            icon={icon}
            type={type}
            className={className}
            mainContextForm={MainContextFormContext}
          />
          <ItemForChoose
            name=""
            value={ourProsList[3]}
            classNameIcon="bi bi-truck"
            context={prosAboutUs}
            icon={icon}
            type={type}
            className={className}
            mainContextForm={MainContextFormContext}
          />
        </div>

        <BlockForInformationFromIcon
          name={prosAboutUs.name}
          text={prosAboutUs.text}
        />
      </section>

      {/* Our service */}
      <section>
        <p className="aboutUs-title">Our services</p>
        <ServiceList
          classNameForList="infoCard-list-ForAboutUsPage"
          classNameForContainer="cardItem-container-ForAboutUsPage"
          classNameForText="cardItem-text-ForAboutUsPage"
          showImg="no"
        />
      </section>
      <section>
        <p className="aboutUs-title">How we work</p>
        <p>
          KL Cargo Moving Company has developed a finely tuned process for
          expertly tackling moves small and large, local or long distance, with
          any level of complexity.
        </p>
        <p>
          Our combination of training, moving services, technology, and
          professional employees creates a pleasant, stress-free moving
          experience.
        </p>
        <p className="highlight">Here’s how we work:</p>

        {/* Section with steps */}
        <MovingSteps />
      </section>
    </div>
  );
};
