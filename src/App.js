import React from 'react';

import './App.css';
import {Users} from "./components/UsersContainer/Users";
import {SpaceX} from "./components/SpaseXContainer/SpaceX";

const App = () => {
  return (
      <div>
        <Users/>
        <SpaceX/>
      </div>
  );
};

export default App;