import React from 'react';

function Rating(){
  return (
    <>
    <Star />
    <Star />
    <Star />
    <Star />
    <Star />
  </>)
}

function Star(){
  return(<div>*</div>)
}

export default Rating;