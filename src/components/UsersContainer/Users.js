// з jsonplaceholder отримати всіх юзерів в компоненту Users.js
// відобразити кожного інформацію (id,name) з кожного юзера (компонента User)
// Зробити кнопку вибора юзера, при натисканні на яку в Users.js ви покажете детальну інфомацію про користувача(довільно обрану інформацію)

import React, {useEffect, useState} from 'react';

import css from './users.module.css';
import {User} from "./User";
import {UserDetails} from "./UserDetails";
import {userService} from "../../services/user.service";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [userDetails, setUserDetails] = useState(null);
  
  useEffect(() => {
    userService.getAll().then(res => setUsers(res.data));
  }, []);
  const click = (id) => {
    if (userDetails && userDetails.id === id) {
      setUserDetails(null);
    } else {
      userService.getById(id).then(res => setUserDetails(res.data));
    }
  };
  
  return (
      <div>
        <h1>Placeholder Api</h1>
        
        <div className={css.Users}>
          <div>{users.map(user => <User key={user.id} user={user} click={click}/>)}</div>
          {userDetails && <UserDetails userDetails={userDetails}/>}
        </div>
      </div>
  );
};

export {Users};