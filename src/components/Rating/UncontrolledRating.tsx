import React, {FC, useState} from "react";
import Star from "./Star";
import {RatingPropsType} from "./Rating";

export const UncontrolledRating : FC<RatingPropsType> = ({value}) => {
  const [rate, setRate] = useState(value);
  const toggleRating = (value: number) => {
    setRate(value)
  }
   return (
    <div>
      {
        [...new Array(5)]
          .map((star, idx) => {
            return idx < rate ?
              <Star selected={true} callback={() => toggleRating(++idx)}/> :
              <Star selected={false} callback={() => toggleRating(++idx)}/>
          })
      }
    </div>)
}

