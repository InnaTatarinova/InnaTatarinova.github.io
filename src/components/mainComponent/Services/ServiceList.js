import React from "react";
import { CardItemComponent } from "./CardComponent";
import localPhoto from "../../../assets/img/ServicePhoto/local.jpg";
import longDistPhoto from "../../../assets/img/ServicePhoto/longDistance.jpg";
import commerPhoto from "../../../assets/img/ServicePhoto/commercial.jpg";
import junkPhoto from "../../../assets/img/ServicePhoto/junk.jpg";
import packingPhoto from "../../../assets/img/ServicePhoto/packing.jpg";
import deliveryPhoto from "../../../assets/img/ServicePhoto/delivery.jpg";
import storagePhoto from "../../../assets/img/ServicePhoto/storage.jpg";
import { serviceTypeList } from "../../../data/serviceType";

export const ServiceList = (props) => {
  return (
    <ul className={`infoCard-list ${props.classNameForList}`}>
      <CardItemComponent
        value={serviceTypeList[0]}
        img= { localPhoto }
        path="/"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        showImg={props.showImg}
      
      />
      <CardItemComponent
        value={serviceTypeList[1]}
        img= { longDistPhoto }
        path="/"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        showImg={props.showImg}
      
      />
      <CardItemComponent
        value={serviceTypeList[2]}
        img= { commerPhoto }
        path="/"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        showImg={props.showImg}
      
      />
      <CardItemComponent
        value={serviceTypeList[3]}
        img= { packingPhoto }
        path="/"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        showImg={props.showImg}
      
      />
      <CardItemComponent
        value={serviceTypeList[4]}
        img= { storagePhoto }
        path="/"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        showImg={props.showImg}
      
      />
      <CardItemComponent
        value={serviceTypeList[5]}
        img= { deliveryPhoto }
        path="/"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        showImg={props.showImg}
      
      />
      <CardItemComponent
        value={serviceTypeList[6]}
        img ={ junkPhoto }
        path="/"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        showImg={props.showImg}
      
      />


      {/* <CardItemComponent
        path="/"
        img={localPhoto}
        label="Local"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        alt="local_photo"
        text="Local Moving"
      />

      <CardItemComponent
        path="/"
        img={longDistPhoto}
        label="Long-Distance"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        alt="long_photo"
        text="Long-Distance Moving"
      />
      <CardItemComponent
        path="/"
        img={commerPhoto}
        label="Commercial"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        alt="commerPhoto_photo"
        text="Commercial Moving"
      />
      <CardItemComponent
        path="/"
        img={packingPhoto}
        label="Packing"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        alt="pack_photo"
        text="Packing"
      />
      <CardItemComponent
        path="/"
        img={storagePhoto}
        label="Storage"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        alt="storage_photo"
        text="Storage"
      />
      <CardItemComponent
        path="/"
        img={deliveryPhoto}
        label="Delivery"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        alt="delivery_photo"
        text="Delivery"
      />

      <CardItemComponent
        path="/"
        img={junkPhoto}
        label="Junk"
        classNameForContainer={props.classNameForContainer}
        classNameForImg={props.classNameForImg}
        classNameForText={props.classNameForText}
        alt="junk_photo"
        text="Junk Removal"
      /> */}
    </ul>
  );
};
