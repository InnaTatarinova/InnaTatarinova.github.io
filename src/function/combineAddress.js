import { checkIfUnderfined } from "./checkIfValueUnderfined";

export function combineAddress(place) {
  let address = "";
  let placeName = "";
  if (place.address.road !== undefined) placeName = place.address.road;
  else placeName = place.name;

  address =
    checkIfUnderfined(place.address.house_number) +
    placeName +
    ", " +
    checkIfUnderfined(place.address.city) +
    checkIfUnderfined(place.address.state) +
    checkIfUnderfined(place.address.postcode) +
    place.address.country;
  return address;
}
