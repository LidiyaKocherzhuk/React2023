import {useContext} from "react";

import {Context} from "../hoc";

const useAppContext = () => {
  const [state, setState] = useContext(Context);
  
  return {
    isAuth: state.isAuth,
    me: state.me,
    setIsAuth: (value) => setState(prev => ({...prev, isAuth: value})),
    setMe: (value) => setState(prev => ({...prev, me: value})),
    trigger: state.trigger,
    updateCar: state.updateCar,
    setTrigger: (value) => setState(prev => ({...prev, trigger: value})),
    setUpdateCar: (value) => setState(prev => ({...prev, updateCar: value})),
  }
}

export {
  useAppContext
}