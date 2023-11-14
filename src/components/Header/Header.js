import React from 'react';
import {Outlet} from "react-router-dom";

const Header = () => {
  
  return (
      <div>
        Header
        <hr/>
        <Outlet/>
      </div>
  );
};

export {Header};