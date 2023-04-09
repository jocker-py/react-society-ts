import React from 'react';
import Star from "./Star";

export type RatingPropsType = {
  value: number;
}

function Rating({value}:RatingPropsType){
  return (
    <div>
      {
        [...new Array(5)]
          .map((star, idx) => {
            return idx < value ?
              <Star selected={true} /> :
              <Star selected={false} />
          })
      }
    </div>)
}



export default Rating;