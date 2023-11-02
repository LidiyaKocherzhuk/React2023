import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import css from '../moduleCSS/Content.module.css';
import {postService} from "../../services/post.service";

const Post = () => {
  const {postId} = useParams();
  const [post, setPost] = useState({});
  const {userId, id, title, body} = post;
  
  useEffect(() => {
    postService.getById(postId).then(({data}) => setPost(data));
  }, []);
  
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
