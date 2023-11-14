import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {Cars} from "./components";

const router = createBrowserRouter([
  {
    path: '', element: <MainLayout/>, children: [
      {index: true, element: <Navigate to={'cars'}/>},
      {path: 'cars', element: <Cars/>}
    ]
  }
]);

export {router};