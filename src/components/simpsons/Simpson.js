import React from 'react';

import './Simpson.css';
const Simpson = ({simpson}) => {
  const {
    name,
    surname,
    age,
    info,
    photo,
  } = simpson;
  
  return (
      <div className="simpson">
          <img src={photo} alt={name}/>
          <div>
            <h3>{name} {surname}</h3>
            <h6>{age} years old.</h6>
            <p>{info}</p>
          </div>
      </div>
  );
};

export {Simpson};