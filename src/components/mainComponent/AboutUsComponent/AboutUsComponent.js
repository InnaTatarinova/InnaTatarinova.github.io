import React, { useContext } from "react";
import "./AboutUsComponent.scss";
import { BlockForInformationFromIcon } from "./BlockForInformationFromIcon";
import { ourProsList } from "../../../data/abouUsInfo";
import { ItemForChoose } from "../../elementsComponent/ItemForChoose/ItemForChoose";
import { MainContextFormContext } from "../../../context/MainContext";
import { AboutUsDescrip } from "./AboutUsDescrip";
import { ServiceList } from "../Services/ServiceList";

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
    </div>
  );
};
