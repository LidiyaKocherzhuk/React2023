import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import css from './Auth.module.css';
import {authService} from "../../services";
import {registerValidator} from "../../validators";

const RegisterForm = () => {
  
  const {
    register,
    handleSubmit,
    reset,
    formState: {errors, isValid}
  } = useForm({mode: "all", resolver: joiResolver(registerValidator)});
  const navigate = useNavigate();
  
  const save = async (userData) => {
    await authService.register(userData).then();
    navigate('/login');
    reset();
  };
  
  return (
      <form onSubmit={handleSubmit(save)} className={css.Auth}>
        
        <label>
          Username <input type="text" placeholder={'username'} {...register('username')}/>
          {errors.username && <div className={css.error}>({errors.username.message}!)</div>}
        </label>
        
        <label>
          Password <input type="text" placeholder={'password'} {...register('password')}/>
          {errors.password && <div className={css.error}>({errors.password.message}!)</div>}
        </label>
        
        <label>
          Confirm password <input type="text"placeholder={'confirm_password'} {...register('re_password')}/>
          {errors.re_password && <div className={css.error}>({errors.re_password.message}!)</div>}
        </label>
        
        <button disabled={!isValid}>Save</button>
        
      </form>
  );
};

export {RegisterForm};