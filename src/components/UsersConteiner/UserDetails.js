import React from 'react';

import css from './users.module.css';
const UserDetails = ({userDetails}) => {
  const {
    address,
    company,
    id,
    name,
    phone,
    username,
    website,
  } = userDetails;
  const {city, street} = address;
  const {bs, catchPhrase} = company;
  
  return (
      <div className={css.UserDetails}>
        <h4>{id}.) {name} {username}</h4>
        
        <div>
          <h5>Address:</h5>
          
          <div>
            <p>City - {city}</p>
            <p>Street - {street}</p>
          </div>
        </div>
        
        <div>
          <h5>Company:</h5>
          
          <div>
            <p>Bs - {bs}</p>
            <p>CatchPhras - {catchPhrase}</p>
            <p>Name - {company.name}</p>
          </div>
        </div>
        
        <h5>Phone - {phone}</h5>
        <h5>Website - {website}</h5>
      </div>
  );
};

export {UserDetails};