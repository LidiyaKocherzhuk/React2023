import React from 'react';
import {useDispatch} from "react-redux";

import {carService} from "../../services";
import {carActions} from "../../redux";
import {useNavigate} from "react-router-dom";

const Car = ({car}) => {
  const {id, price, brand, year} = car;
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const makeUpdate = () => {
    dispatch(carActions.setUpdateCar(car));
    navigate('/create');
  }
  
  const makeDelete = () => {
    carService.delete(id).then();
    dispatch(carActions.deleteCar(id));
  }
  
  return (
      <div>
        <div>id: {id}</div>
        <div>price: {price}</div>
        <div>brand: {brand}</div>
        <div>year: {year}</div>
        <button onClick={makeUpdate}>update</button>
        <button onClick={makeDelete}>delete</button>
        <hr/>
      </div>
  );
};

export {Car};