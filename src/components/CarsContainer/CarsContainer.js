import React, {useEffect, useState} from 'react';

import {carService} from '../../services/carService';
import {Cars} from './Cars';
import {CarsForm} from './CarsForm';

const CarsContainer = () => {
  const [cars, setCars] = useState([]);
  const [trigger, setTrigger] = useState(false);
  const [updateCar, setUpdateCar] = useState(null);
  
  useEffect(()=>{
    carService.getAll().then(({data}) => setCars(data));
  }, [trigger]);
  
  return (
      <div>
        <CarsForm setTrigger={setTrigger} updateCar={updateCar} setUpdateCar={setUpdateCar}/>
        <hr/>
        <Cars cars={cars} setUpdateCar={setUpdateCar} setTrigger={setTrigger}/>
      </div>
  );
};

export {CarsContainer};