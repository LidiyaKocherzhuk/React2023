import {createContext, useState} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
  const state = useState({isAuth: null, me: null, trigger: null, updateCar: null});
  
  return (
      
      < Context.Provider value={state}>
        {children}
      </Context.Provider>
  
  )
};

export {Context, ContextProvider};