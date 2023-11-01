import React from 'react';

import './Character.css';

const Character = ({character}) => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  } = character;
  
  return (
      <div className="character">
          <div className="title">
            <img src={image} alt={name}/>
            <h2>{id}.) {name}</h2>
          </div>
          
          <h4>Status - {status}</h4>
          <h4>Species - {species}</h4>
          {type && <h4>Type - {type}</h4>}
          <h4>Gender - {gender}</h4>
          
          <div>
            <h4>Origin: </h4>
            <ul>
              <li>Name - {origin.name}</li>
              <li>Url - {origin.url}</li>
            </ul>
          </div>
          
          <div>
            <h4>location: </h4>
            <ul>
              <li>Name - {location.name}</li>
              <li>Url - {location.url}</li>
            </ul>
          </div>
          
          <div>
          <h4>episode: </h4>
            <ul>
              {episode.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
       
          <h4>Url - <a href={url}>{url.toString()}</a></h4>
          <h4>Created - {new Date(created).toDateString()}</h4>
      
      </div>
  );
};

export {Character};

// [
//   {
//     "id": 1,
//     "name": "Rick Sanchez",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//       "name": "Earth (C-137)",
//       "url": "https://rickandmortyapi.com/api/location/1"
//     },
//     "location": {
//       "name": "Earth (Replacement Dimension)",
//       "url": "https://rickandmortyapi.com/api/location/20"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/1",
//       "https://rickandmortyapi.com/api/episode/2",
//       // ...
//     ],
//     "url": "https://rickandmortyapi.com/api/character/1",
//     "created": "2017-11-04T18:48:46.250Z"
//   },
//   {
//     "id": 183,
//     "name": "Johnny Depp",
//     "status": "Alive",
//     "species": "Human",
//     "type": "",
//     "gender": "Male",
//     "origin": {
//       "name": "Earth (C-500A)",
//       "url": "https://rickandmortyapi.com/api/location/23"
//     },
//     "location": {
//       "name": "Earth (C-500A)",
//       "url": "https://rickandmortyapi.com/api/location/23"
//     },
//     "image": "https://rickandmortyapi.com/api/character/avatar/183.jpeg",
//     "episode": [
//       "https://rickandmortyapi.com/api/episode/8"
//     ],
//     "url": "https://rickandmortyapi.com/api/character/183",
//     "created": "2017-12-29T18:51:29.693Z"
//   }
// ]