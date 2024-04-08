import React, { useState } from "react";
import "./ServiceArea.scss";
import { ServiceAreaCard } from "./ServiceAreaCard";
import { ButtonComponent } from "../../elementsComponent/ButtonComponents/ButtonComponnet";

const toronto = require("../../../assets/img/serviceAreaPhoto/toronto.jpg");
const barrie = require("../../../assets/img/serviceAreaPhoto/barrie.jpg");
const bradford = require("../../../assets/img/serviceAreaPhoto/bradford.jpg");
const brampton = require("../../../assets/img/serviceAreaPhoto/brampton.jpg");
const inisfill = require("../../../assets/img/serviceAreaPhoto/inisfill.jpg");
const london = require("../../../assets/img/serviceAreaPhoto/london.jpg");
const milton = require("../../../assets/img/serviceAreaPhoto/milton.jpg");
const mississauga = require("../../../assets/img/serviceAreaPhoto/mississagua.jpg");
const niagaraFalls = require("../../../assets/img/serviceAreaPhoto/niagaraFall.jpg");
const vaughan = require("../../../assets/img/serviceAreaPhoto/vaughan.jpg");
const whitby = require("../../../assets/img/serviceAreaPhoto/whitby.jpg");
const kitchener = require("../../../assets/img/serviceAreaPhoto/kitchener.jpg");

export const ServiceArea = () => {
  const phoneNumberDial = () => {
    window.location.href = "tel://+12345678998";
  };
  return (
    <div className="serviceArea-conteiner">
      <h2 className="serviceArea-title">Service Area</h2>
      <ul className="serviceArea-list">
        <ServiceAreaCard
          img={toronto}
          alt="toronto"
          text="Toronto"
          gridName="img1"
        />
        <ServiceAreaCard
          img={barrie}
          alt="barrie"
          text="Barrie"
          gridName="img2"
        />
        <ServiceAreaCard
          img={bradford}
          alt="bradford"
          text="Bradford"
          gridName="img3"
        />
        <ServiceAreaCard
          img={brampton}
          alt="brampton"
          text="Brampton"
          gridName="img4"
        />
        <ServiceAreaCard
          img={inisfill}
          alt="inisfill"
          text="Inisfill"
          gridName="img5"
        />
        <ServiceAreaCard
          img={london}
          alt="london"
          text="London"
          gridName="img6"
        />
        <ServiceAreaCard
          img={milton}
          alt="milton"
          text="Milton"
          gridName="img7"
        />
        <ServiceAreaCard
          img={mississauga}
          alt="mississauga"
          text="Mississauga"
          gridName="img8"
        />
        <ServiceAreaCard
          img={niagaraFalls}
          alt="niagaraFall"
          text="Niagara Falls"
          gridName="img9"
        />
        <ServiceAreaCard
          img={vaughan}
          alt="vaughan"
          text="Vaughan"
          gridName="img10"
        />
        <ServiceAreaCard
          img={whitby}
          alt="whitby"
          text="Whitby"
          gridName="img11"
        />
        <ServiceAreaCard
          img={kitchener}
          alt="kitchener"
          text="Kitchener"
          gridName="img12"
        />
      </ul>
      <div className="bottomServiceArea">
        <h2 className="titleForQuestion">Can't find your city?</h2>
        <ButtonComponent
          btnSize="btn-large"
          btnColor="btn-dark"
          btnBorder="btn-border-light"
          btnHoverStyle="btn-lightHoverTheme"
          onClick={phoneNumberDial}
          className="btnCallUs"
        >
          Call now
        </ButtonComponent>
      </div>
    </div>
  );
};
