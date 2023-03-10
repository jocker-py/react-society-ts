import React from 'react';

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

function AccordionTitle(props:{title:string}){
  return(<h3>{props.title}</h3>)
}

export default Accordion;