import React, {useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {joiResolver} from "@hookform/resolvers/joi";

import {carService} from '../../services/carService';
import {carValidation} from "../../validators/car.validation";

const CarsForm = ({setTrigger, updateCar, setUpdateCar}) => {
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
    resolver: joiResolver(carValidation),
  });
  
  useEffect(() => {
    if (updateCar) {
      setValue('brand', updateCar.brand, {shouldValidate: true});
      setValue('price', updateCar.price, {shouldValidate: true});
      setValue('year', updateCar.year, {shouldValidate: true});
    }
  }, [updateCar]);
  const save = async (car) => {
    await carService.create(car);
    setTrigger(prev => !prev);
    reset();
  };
  const update = async (car) => {
    await carService.update(updateCar.id, car);
    setTrigger(prev => !prev);
    setUpdateCar(null);
    reset();
  };
  
  return (
      <div>
        {/*<form onSubmit={handleSubmit(updateCar ? update : save)}>*/}
        {/*  <input type='text' placeholder='brand' {...register('brand', {*/}
        {/*    // minLength: 1,*/}
        {/*    // maxLength: 20,*/}
        {/*    pattern: {value: /^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/, message: 'Only letters min 1 and max 20 ch.'}*/}
        {/*  })} />*/}
        {/*  <input type='text' placeholder='price' {...register('price', {*/}
        {/*    valueAsNumber: true,*/}
        {/*    minLength: {value: 1, message: "min 1"},*/}
        {/*    maxLength: {value: 1_000_000, message: "max 1_000_000"},*/}
        {/*  })} />*/}
        {/*  <input type='text' placeholder='year' {...register('year', {*/}
        {/*    valueAsNumber: true,*/}
        {/*    minLength: {value: 1990, message: "min 1990"},*/}
        {/*    maxLength: {value: new Date().getFullYear(), message: `max ${new Date().getFullYear()}`}*/}
        {/*  })} />*/}
        {/*  <button disabled={!isValid}>{updateCar ? 'update' : 'save'}</button>*/}
        {/*</form> */}
        
        <form onSubmit={handleSubmit(updateCar ? update : save)}>
          <input type='text' placeholder='brand' {...register('brand')} />
          <input type='text' placeholder='price' {...register('price', {
            valueAsNumber: true,
           })} />
          <input type='text' placeholder='year' {...register('year', {
            valueAsNumber: true,
           })} />
          <button disabled={!isValid}>{updateCar ? 'update' : 'save'}</button>
        </form>
        
        {errors.brand && <div>{errors.brand.message}</div>}
        {errors.price && <div>{errors.price.message}</div>}
        {errors.year && <div>{errors.year.message}</div>}
        
      </div>
  );
};

export {CarsForm};