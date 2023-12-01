import React from "react";
import { CardItemComponent } from "./CardComponent";
import "./Services.scss";
import localPhoto from "../../assets/img/local.jpg";
import longDistPhoto from "../../assets/img/longDistance.jpg";
import commerPhoto from "../../assets/img/commercial.jpg";
import junkPhoto from "../../assets/img/junk.jpg";
import packingPhoto from "../../assets/img/packing.jpg";
import deliveryPhoto from "../../assets/img/delivery.jpg";
import storagePhoto from "../../assets/img/storage.jpg";

export const Services = () => {
  return (
    <div className="infoCards">
      <h2 className="infoCard-title">WELCOME TO OUR MOVING WORLD!</h2>
      <ul className="infoCard-list">
        <CardItemComponent
          path="/"
          img={localPhoto}
          label="Local"
          className="cardItem-label"
          alt="local_photo"
          text="Local Moving"
        />
        <CardItemComponent
          path="/"
          img={longDistPhoto}
          label="Long-Distance"
          className="cardItem-label"
          alt="long_photo"
          text="Long-Distance Moving"
        />
        <CardItemComponent
          path="/"
          img={commerPhoto}
          label="Commercial"
          className="cardItem-label"
          alt="commerPhoto_photo"
          text="Commercial Moving"
        />
        <CardItemComponent
          path="/"
          img={packingPhoto}
          label="Packing"
          className="cardItem-label"
          alt="pack_photo"
          text="Packing"
        />
        <CardItemComponent
          path="/"
          img={storagePhoto}
          label="Storage"
          className="cardItem-label"
          alt="storage_photo"
          text="Storage"
        />
        <CardItemComponent
          path="/"
          img={deliveryPhoto}
          label="Delivery"
          className="cardItem-label"
          alt="delivery_photo"
          text="Delivery"
        />

        <CardItemComponent
          path="/"
          img={junkPhoto}
          label="Junk"
          className="cardItem-label"
          alt="junk_photo"
          text="Junk Removal"
        />
      </ul>
    </div>
  );
};
