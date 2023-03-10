import React from 'react';
import './App.css';
import Rating from "./components/Rating/Rating";
import Accordion from "./components/Accordion/Accordion";


const App = () => {
  return (<div>
      This is Component
      <Rating />
      <Accordion title={"Меню"}/>
    </div>
  );
}

export default App;