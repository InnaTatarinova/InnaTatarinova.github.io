import React, { useState } from "react";
import { Input } from "./Input/Input";
import { DropDownList } from "./DropDownList";
import temporaryLinkToJSON from "../../../data/list.json";
import "../FormForQuote/ElementsForQuote.scss";


//Component for Input which get information from server and call DropDownList

export const InputWithDropList = (props) => {
  const [value, setValue] = useState("");
  const [resultList, setResult] = useState([]);
  const [wasSelectedItem, setWasSelectedItem] = useState(false);

  const getList = async (e) => {
    setWasSelectedItem(false);
    if (e.target.value.length > 4) {
      // https://nominatim.openstreetmap.org/search.php?street=15+rathburn&countrycodes=ca,us&format=jsonv2&addressdetails=1

      //Working code! Conect with server. Temporary turn off!!!!

      // let list = [];
      // let bb = JSON.stringify({ keyword: value });
      // await fetch(props.endpoint, {
      //   method: "POST",
      //   body: bb,
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // })
      //   .then((blob) => blob.json())
      //   .then((data) => {
      //     list.push(...data);
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // setResult(list);

      setResult(temporaryLinkToJSON);
    }
  };

  return (
    <div className={`formQuoteInput ${props.zPosition}`} onChange={getList} >
      
      <Input
        {...props.validat}
        className={props.className}
        setValue={setValue}
        value={value}
      />

      {!wasSelectedItem ? (
        resultList.length > 0 ? (
          //value as a props.list temporary for get info fromLocal JSON
          <DropDownList
            list={resultList}
            value={value}
            setValue ={setValue}
            type={props.type}
            setWasSelectedItem={setWasSelectedItem}
          />
        ) : null
      ) : null}
    </div>
  );
};
