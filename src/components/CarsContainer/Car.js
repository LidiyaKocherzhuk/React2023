import React from 'react';
import {carService} from "../../services";

const Car = ({car}) => {
  const {id, price, brand, year} = car;
  
  const makeUpdate = () => {
  
  }
  
  const makeDelete = () => {
    carService.delete(id).then();
    
  }
  
  return (
      <div>
        <div>id: {id}</div>
        <div>price: {price}</div>
        <div>brand: {brand}</div>
        <div>year: {year}</div>
        <button>update</button>
        <button onClick={makeDelete}>delete</button>
        <hr/>
      </div>
  );
};

export {Car};