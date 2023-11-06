import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from "@hookform/resolvers/joi";

import css from './Cars.module.css';
import {carValidator} from "../../validators";
import {carsService} from "../../services";
import {useAppContext} from "../../hooks";

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
    mode: "all",
    resolver: joiResolver(carValidator),
  });
  
  const {setTrigger, updateCar, setUpdateCar} = useAppContext();
  
  useEffect(() => {
    if (updateCar) {
      setValue('brand', updateCar.brand, {shouldValidate: true});
      setValue('price', updateCar.price, {shouldValidate: true});
      setValue('year', updateCar.year, {shouldValidate: true});
    }
  }, [updateCar]);
  
  const save = async (car) => {
    await carsService.create(car);

    setTrigger(prev => !prev);
    reset();
  };
  
  const update = async (car) => {
    await carsService.update(updateCar.id, car);
    setTrigger(prev => !prev);
    setUpdateCar(null);
    reset();
  };
  
  return (
      <div>
        
        <form onSubmit={handleSubmit(updateCar ? update : save)} className={css.CarsForm}>
          
          <label>
            brand <input type='text' placeholder='brand' {...register('brand')} />
          </label>
          
          <label>
            price <input type='text' placeholder='price' {...register('price', {
            valueAsNumber: true,
          })} />
          </label>
          
          <label>
            year <input type='text' placeholder='year' {...register('year', {
            valueAsNumber: true,
          })} />
          </label>
          
          <button disabled={!isValid}>{updateCar ? 'update' : 'save'}</button>
        
        </form>
        
        {errors.brand && <div>{errors.brand.message}</div>}
        {errors.price && <div>{errors.price.message}</div>}
        {errors.year && <div>{errors.year.message}</div>}
        
        <hr/>
      
      </div>
  );
};

export {CarsForm};