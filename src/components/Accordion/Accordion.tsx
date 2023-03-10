import React from 'react';

type AccordionPropsType = {
  title: string;
}
function Accordion(props:AccordionPropsType){
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

type AccordionTitleProps = {
  title: string;
}
function AccordionTitle(props:AccordionTitleProps){
  return(<h3>{props.title}</h3>)
}

export default Accordion;