import React from 'react';

function Rating(props:{value:number}){
  return (
    <div>
      <Star />
      <Star />
      <Star />
      <Star />
      <Star />
    </div>)
}

function Star(){
  return(<div>*</div>)
}

export default Rating;