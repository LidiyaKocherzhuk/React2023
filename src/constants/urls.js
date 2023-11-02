const baseURL = 'https://jsonplaceholder.typicode.com';

const urls = {
  todos: {
    base: '/todos',
  },
  albums: {
    base: '/albums',
  },
  comments: {
    base: '/comments',
  },
  posts: {
    byPostId: (id) => `/posts/${id}`,
  },
};

export {
  baseURL,
  urls,
};