import {createContext, useState} from "react";

const Context = createContext(null);
const ContextProvider = ({children}) => {
  const [state, setState] = useState({isAuth: null, me: null});
  
  return (
      
      < Context.Provider value={state}>
        {children}
      </Context.Provider>
  
  )
};

export {Context, ContextProvider};