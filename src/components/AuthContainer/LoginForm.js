import React, {useState} from 'react';
import {useForm} from "react-hook-form";

import css from './Auth.module.css';
import {authService} from "../../services";
import {useAppContext} from "../../hooks";

const LoginForm = () => {
  
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  
  const {setMe, setIsAuth} = useAppContext();
  const [serverError, setServerError] = useState(null);
  
  const send = async (loginData) => {
    try {
      const authData = await authService.login(loginData);
      setMe(authData);
      setIsAuth(true);
      setServerError(null);
    } catch (error) {
      setServerError(`${error.message}, No active account found with the given credentials!`);
    }
  };
  
  
  return (
      <form onSubmit={handleSubmit(send)} className={css.Auth}>
        
        <label>
          Username <input type="text" placeholder={'username'} {...register('username')}/>
        </label>
        
        <label>
          Password <input type="text" placeholder={'password'} {...register('password')}/>
        </label>
        
        {serverError && <div className={css.error}>({serverError}!)</div>}
        
        <button>Save</button>
      
      </form>
  );
};

export {LoginForm};