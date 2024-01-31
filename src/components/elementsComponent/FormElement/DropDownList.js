import React, { useContext } from "react";
import "./DropDownList.scss";
import { MovingFormContext } from "../../../context/MovingFormContext";
import { combineAddress } from "../../../function/combineAddress";

export const DropDownList = (props) => {
  const { dispatch } = useContext(MovingFormContext);

  const chooseItemFromList = (event, place) => {
    dispatch({
      type: props.type,
      payload: place,
    });

    props.setWasSelectedItem(true);
    props.setValue("");
  };

  return (
    <ul className="dropDownList">
      {props.list
        //use filter only temporary for testing list without server. Map is permanent option
        .filter((listInit) => {
          if (
            listInit.display_name
              .toLowerCase()
              .replaceAll(",", "")
              .replaceAll(" ", "")
              .includes(
                props.value
                  .toLowerCase()
                  .replaceAll(",", "")
                  .replaceAll(" ", "")
              )
          ) {
            return listInit;
          }
          return "";
        })

        .map((place, key) => {
          return (
            <li key={key} onClick={(event) => chooseItemFromList(event, place)}>
              {combineAddress(place)};
            </li>
          );
        })}
    </ul>
  );
};
