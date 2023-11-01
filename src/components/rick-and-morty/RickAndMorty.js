// 2. Створити компонент який описує персонажа (властивості id,name,status,species,gender,image) з цього апі
//  https://rickandmortyapi.com/
//  https://rickandmortyapi.com/api/character
//  Створити 6 персонажів

import React, {useEffect, useState} from 'react';

import {Character} from "./Character";

const RickAndMorty = () => {
  const [characters, setCharacters] = useState([]);
  
  useEffect(() => {
    const characterIds = [1, 2, 3, 4, 5, 6];
    
    fetch(`https://rickandmortyapi.com/api/character/${characterIds}`)
        .then(response => response.json())
        .then(value => setCharacters(value));
  }, []);
  
  return (
      <div>
        <h1>Rick And Morty</h1>
        
        {characters.map(character => <Character key={character.id} character={character}/>)}
      </div>
  );
};

export {RickAndMorty};