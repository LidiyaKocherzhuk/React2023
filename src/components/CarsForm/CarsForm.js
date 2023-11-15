import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {joiResolver} from "@hookform/resolvers/joi";
import {useNavigate} from "react-router-dom";

import css from './CarsForm.module.css';
import {carValidator} from "../../validators";
import {carService} from "../../services";
import {carActions} from "../../redux";

const CarsForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: {
      errors,
      isValid,
    },
  } = useForm({
    mode: "onTouched",
    resolver: joiResolver(carValidator),
  });
  
  const {updateCar} = useSelector(state => state.carReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    if (updateCar) {
      setValue('brand', updateCar.brand, {shouldValidate: true});
      setValue('price', updateCar.price, {shouldValidate: true});
      setValue('year', updateCar.year, {shouldValidate: true});
    }
  }, [updateCar]);
  
  const save = async (car) => {
    await carService.create(car);
    dispatch(carActions.setTrigger());
    navigate('/cars');
    reset();
  };
  
  const update = async (car) => {
    await carService.update(updateCar.id, car);
    dispatch(carActions.setUpdateCar(null));
    navigate('/cars');
    reset();
  };
  
  return (
      <div>
        
        <form onSubmit={handleSubmit(updateCar ? update : save)} className={css.CarsForm}>
          
          <label>
            brand <input type='text' placeholder='brand' {...register('brand')} />
          </label>
          {errors.brand && <div>{errors.brand.message}</div>}
          
          <label>
            price <input type='text' placeholder='price' {...register('price', {
            valueAsNumber: true,
          })} />
          </label>
          {errors.price && <div>{errors.price.message}</div>}
          
          <label>
            year <input type='text' placeholder='year' {...register('year', {
            valueAsNumber: true,
          })} />
          </label>
          {errors.year && <div>{errors.year.message}</div>}
          
          <button disabled={!isValid}>{updateCar ? 'update' : 'save'}</button>
        
        </form>
      
      
      </div>
  );
};

export {CarsForm};