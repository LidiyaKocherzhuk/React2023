import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  cars: [],
}

const carSlice = createSlice({
  name: 'carSlice',
  initialState,
  reducers: {
    setResponse: (state, action) => {
      state.cars = action.payload;
    }
  }
});

const {reducer: carReducer, actions} = carSlice;
const carActions = {...actions};

export {carReducer, carActions};