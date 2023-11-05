import React from 'react';

import css from './Header.module.css';
import {NavLink} from "react-router-dom";
const Header = () => {
  return (
      <div className={css.Header}>
        
        <h2>CARS</h2>
        
        <div>
          <NavLink to='login'>Login</NavLink>
          <NavLink to='register'>Register</NavLink>
        </div>
        
      </div>
  );
};

export {Header};