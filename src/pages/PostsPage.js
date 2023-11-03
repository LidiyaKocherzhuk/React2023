import React from 'react';
import {useLoaderData} from "react-router-dom";

import {Post} from "../components/PostsContainer/Post";

const PostsPage = () => {
  const {data} = useLoaderData();
  
  return (
      <div>
        <Post post={data}/>
      </div>
  );
};

export {PostsPage};