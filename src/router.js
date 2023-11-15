import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {Cars} from "./components";
import {CarsForm} from "./components/CarsForm";

const router = createBrowserRouter([
  {
    path: '', element: <MainLayout/>, children: [
      {index: true, element: <Navigate to={'cars'}/>},
      {path: 'cars', element: <Cars/>},
      {path: 'create', element: <CarsForm/>}
    ]
  }
]);

export {router};