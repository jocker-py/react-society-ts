import React from "react";

type StarPropsType = {
  selected: boolean;
  callback? : () => void;
}

const Star = ({selected, callback}:StarPropsType) => {
  return(<span onClick={() => callback && callback()}>{selected ? <b>star </b> : 'star '}</span>)
}

export default Star;

