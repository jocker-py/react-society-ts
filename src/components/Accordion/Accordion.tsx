import React from 'react';

type AccordionPropsType = {
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

type AccordionBodyPropsType = {
  collapsed: boolean;
}
function AccordionBody(props:AccordionBodyPropsType){
  return(props.collapsed ? <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul> : <ul></ul>)
}

type AccordionTitleProps = {
  title: string;
}
function AccordionTitle(props:AccordionTitleProps){
  return(<h3>{props.title}</h3>)
}

export default Accordion;