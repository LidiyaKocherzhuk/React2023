import React from 'react';

import css from '../moduleCSS/Content.module.css';

const Post = ({post}) => {
  const {userId, id, title, body} = post;

  return (
      <div className={css.content}>
        <h3>Post</h3>
        <hr/>
        <div>userId: {userId}</div>
        <div>id: {id}</div>
        <div>title: {title}</div>
        <div>body: {body}</div>
      </div>
  );
};

export {Post};
