import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cars: [],
  updateCar: null,
  trigger: false,
}

const carSlice = createSlice({
  name: 'carSlice',
  initialState,
  reducers: {
    setResponse: (state, action) => {
      state.cars = action.payload;
    },
    setUpdateCar: (state, action) => {
      state.updateCar = action.payload;
    },
    setTrigger: (state, action) => {
      state.trigger = !state.trigger;
    },
    updateCar: (state, action) => {
      state.cars = state.cars.map(car => {
        if (car.id === action.payload.id) {
          return action.payload;
        }
        return car;
      });
    },
    deleteCar: (state, action) => {
      state.cars = state.cars.filter(car => car.id !== action.payload);
    },
  }
});

const {reducer: carReducer, actions} = carSlice;
const carActions = {...actions};

export {carReducer, carActions};