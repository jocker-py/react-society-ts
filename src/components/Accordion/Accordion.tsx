import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

export type AccordionPropsType = {
  title: string;
  collapsed: boolean;
}

function Accordion(props:AccordionPropsType){
  return(
    <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody collapsed={props.collapsed}/>
    </div>
  )
}

export default React.memo(Accordion);