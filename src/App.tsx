import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";


const App = () => {
  return (<div>
      <AppTitle title={"This is Component"}/>
      <Accordion title={"Menu"}/>
      <Rating value={3}/>
      <Accordion title={"Users"}/>
      <Rating value={0}/>
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