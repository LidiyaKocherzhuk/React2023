import React from 'react';

import {carsService} from "../../services";
import {useAppContext} from "../../hooks";

const Car = ({car}) => {
  const {id, brand, price, year, photo} = car;
  
  const {setUpdateCar, setTrigger} = useAppContext();
  
  const deleteCar = async () => {
    await carsService.delete(id);
    setTrigger(prev => !prev);
  }
  
  return (
      <div>
        <div>id: {id}</div>
        <div>brand: {brand}</div>
        <div>price: {price}</div>
        <div>year: {year}</div>
        {photo && <img src={photo} alt={brand}/>}
        <button onClick={() => setUpdateCar(car)}>update</button>
        <button onClick={() => deleteCar()}>delete</button>
      </div>
  );
};

export {Car};