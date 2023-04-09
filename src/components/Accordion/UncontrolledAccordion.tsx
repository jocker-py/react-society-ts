import React, {useState} from "react";
import {AccordionPropsType} from "./Accordion";
import AccordionTitle from "./AccordionTitle";
import AccordionBody from "./AccordionBody";

function UncontrolledAccordion({title, collapsed}:AccordionPropsType){
  const [collaps, setCollaps] = useState(collapsed);
  const toggleCollaps = () => setCollaps(!collaps);
  return(
    <div>
      <AccordionTitle title={title} callback={toggleCollaps}/>
      <AccordionBody collapsed={collaps}/>
    </div>
  )
}

export default UncontrolledAccordion;