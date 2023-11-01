import React from 'react';

import './App.css'
import {Simpsons} from "./components";
import {RickAndMorty} from "./components/rick-and-morty/RickAndMorty";

const App = () => {
  return (
      <div>
        <Simpsons/>
        <RickAndMorty/>
      </div>
  );
};

export default App;