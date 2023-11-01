import React from 'react';

const SpaceXDetail = ({mission}) => {
  const {mission_name, launch_year, links} = mission;
  
  return (
      <div>
        <h2>{mission_name} - {launch_year} launch year</h2>
        <img src={links.mission_patch_small} alt={mission_name}/>
      </div>
  );
};

export {SpaceXDetail};