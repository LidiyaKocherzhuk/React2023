import React from 'react';
import {NavLink, useNavigate} from "react-router-dom";

import css from './Header.module.css';
import {useAppContext} from "../../hooks";
import {authService} from "../../services";

const Header = () => {
  
  const {me, setMe, setIsAuth} = useAppContext();
  const navigate = useNavigate();
  
  const logOut = () => {
    authService.deleteToken();
    setMe(null);
    setIsAuth(null);
    navigate('login');
  }
  
  return (
      <div className={css.Header}>
        
        <h2>CARS</h2>
        
        {!me
            ? <div>
              <NavLink to='login'>Login</NavLink>
              <NavLink to='register'>Register</NavLink>
            </div>
            
            : <div>
              <h3>{me.username}</h3>
              <button onClick={() => logOut()}>logOut</button>
            </div>
        }
      
      </div>
  );
};

export {Header};