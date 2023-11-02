import React from 'react';

import {Car} from './Car';

const Cars = ({cars, setUpdateCar, setTrigger}) => {
  return (
      <div>
        {cars.map(car => <Car key={car.id} car={car} setUpdateCar={setUpdateCar} setTrigger={setTrigger}/>)}
      </div>
  );
};

export {Cars};