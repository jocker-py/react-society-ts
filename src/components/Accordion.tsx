import React from 'react';
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

function Accordion(props:{title: string}){
  return(
    <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody />
    </div>
  )
}

export default Accordion;