// є API от SpaceX
// https://api.spacexdata.com/v3/launches/
// потрібно вивести всі запуски кораблів окрім 2020 року
// репрезентувати тільки окремі поля (зазначені в скрнішоті в папці)

import React, {useEffect, useState} from 'react';

import {spaceXService} from "../../services/spaceX.service";
import {SpaceXDetail} from "./SpaceXDetail";

const SpaceX = () => {
  const [spaceX, setSpaceX] = useState([]);
  
  useEffect(() => {
    spaceXService.getExcludeYear(2020).then(res => setSpaceX(res.data));
  }, []);
  
  return (
      <div>
        <h1>SpaceX API</h1>
        { spaceX.map((mission, index) => <SpaceXDetail key={index} mission={mission}/>)}
      </div>
  );
};

export {SpaceX};