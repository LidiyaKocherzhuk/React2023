import React from 'react';

const User = ({user, click}) => {
  const {id,name} = user;
  
  return (
      <div>
        <h3>{id}.) {name}</h3>
        <button onClick={() => click(id)}>Details</button>
      </div>
  );
};

export {User};