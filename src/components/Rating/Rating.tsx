import React from 'react';

function Rating(props:{value : number}){
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

function Star(props:{selected: boolean}){
  return(<span>{props.selected ? <b>star </b> : 'star '}</span>)
}

export default Rating;