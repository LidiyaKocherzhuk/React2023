import React, {useEffect, useState} from 'react';

import {carsService} from "../../services";
import {useAppContext} from "../../hooks";
import {Car} from "./Car";

const Cars = () => {
  const [cars, setCars] = useState([]);
  const {trigger} = useAppContext();
  
  
  useEffect(() => {
    carsService.getAll().then(({data}) => setCars(data.items));
  }, [trigger]);
  
  return (
      <div>
        {cars.map(car => <Car key={car.id} car={car}/>)}
      </div>
  );
};

export {Cars};