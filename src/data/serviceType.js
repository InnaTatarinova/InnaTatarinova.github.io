import localPhoto from "../assets/img/ServicePhoto/local.jpg";
import longDistPhoto from "../assets/img/ServicePhoto/longDistance.jpg";
import commerPhoto from "../assets/img/ServicePhoto/commercial.jpg";
import junkPhoto from "../assets/img/ServicePhoto/junk.jpg";
import packingPhoto from "../assets/img/ServicePhoto/packing.jpg";
import deliveryPhoto from "../assets/img/ServicePhoto/delivery.jpg";
import storagePhoto from "../assets/img/ServicePhoto/storage.jpg";

export const serviceTypeList = [
  {
    name: "Local Moving",
    id: 1,
    img: { localPhoto },
    alt: "local_photo",
    label: "Local",
  },
  {
    name: "Long-Distance Moving",
    id: 2,
    img: { longDistPhoto },
    alt: "long_photo",
    label: "Long-Distance",
  },
  {
    name: "Commercial Moving",
    id: 3,
    img: { commerPhoto },
    alt: "commerPhoto_photo",
    label: "Commercial",
  },
  {
    name: "Packing",
    id: 4,
    img: { packingPhoto },
    alt: "pack_photo",
    label: "Packing",
  },
  {
    name: "Storage",
    id: 5,
    img: { storagePhoto },
    alt: "storage_photo",
    label: "Storage",
  },
  {
    name: "Delivery",
    id: 6,
    img: { deliveryPhoto },
    alt: "delivery_photo",
    label: "Delivery",
  },
  {
    name: "Junk Removal",
    id: 7,
    img: { junkPhoto },
    alt: "junk_photo",
    label: "Junk",
  },
];
