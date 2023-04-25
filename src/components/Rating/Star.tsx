import React from "react";
import gray from "./../../assets/grayStar.png";
import gold from "./../../assets/goldStar.png";

type StarPropsType = {
  selected: boolean;
  callback? : () => void;
}

const Star = ({selected, callback}:StarPropsType) => {
  return(
    <img src={selected ? gold : gray}
         alt={selected ? "gold star" : "gray star"}
         onClick={() => callback && callback()}/>)
}

export default Star;

