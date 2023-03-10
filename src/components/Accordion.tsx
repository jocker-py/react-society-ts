import React from 'react';
import AccordionTitle from "./AccordionTitle";

function Accordion(props:{title: string}){
  return(
    <div>
      <AccordionTitle title={props.title}/>
      <AccordionBody />
    </div>
  )
}

function AccordionBody(){
  return(<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>)
}

export default Accordion;