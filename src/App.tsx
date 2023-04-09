import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";
import {OnOff} from "./components/OnOff/OnOff";
import UncontrolledAccordion from "./components/Accordion/UncontrolledAccordion";
import UncontrolledRating from "./components/Rating/UncontrolledRating";


const App = () => {
  return (<div>
      <AppTitle title={"This is Component"}/>
      <Accordion title={"Menu"} collapsed={false}/>
      <Rating value={3}/>
      <Accordion title={"Users"} collapsed={true}/>
      <Rating value={0}/>
      <OnOff/>
      <OnOff/>
      <OnOff/>
      <UncontrolledAccordion title={"Menu"} collapsed={false}/>
      <UncontrolledAccordion title={"Users"} collapsed={true}/>
      <UncontrolledRating value={0}/>
      <UncontrolledRating value={5}/>
    </div>
  );
}

type AppTitleProps = {
 title: string
}
function AppTitle(props:AppTitleProps){
  return <h1>{props.title}</h1>
}

export default App;