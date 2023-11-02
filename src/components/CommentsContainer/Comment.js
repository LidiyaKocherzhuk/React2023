import React, {useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import css from '../moduleCSS/Content.module.css';

const Comment = ({comment}) => {
  const {postId, id, name, email, body} = comment;
  const [clickId, setClickId] = useState(0);
  
  const navigate = useNavigate();
  
  const click = () => {
    
    if (clickId === id) {
      setClickId(0);
    } else {
      navigate(`post/${postId}`);
      setClickId(id);
    }
    
  }
  
  return (
      <div className={css.content}>
        
        <div>userId: {postId}</div>
        <div>id: {id}</div>
        <div>name: {name}</div>
        <div>email: {email}</div>
        <div>body: {body}</div>
        <button onClick={click}>post</button>
        
        {clickId === id && <Outlet/>}
      </div>
  );
};

export {Comment};