import React from 'react';

type RatingPropsType = {
  value: number;
}
function Rating(props:RatingPropsType){
  return (
    <div>
      {
        [...new Array(5)]
          .map((star, idx) => {
            return idx < props.value ?
              <Star selected={true} /> :
              <Star selected={false} />
          })
      }
    </div>)
}

type StarPropsType = {
  selected: boolean;
}
function Star(props:StarPropsType){
  return(<span>{props.selected ? <b>star </b> : 'star '}</span>)
}

export default Rating;