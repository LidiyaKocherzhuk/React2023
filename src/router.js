// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі todo з https://jsonplaceholder.typicode.com/todos
//
// albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
// comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
// при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости. приклад запиту https://jsonplaceholder.typicode.com/posts/ID
// id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.

import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts/MainLayout";
import {CommentsPage} from "./pages/CommentsPage";
import {AlbumsPage} from "./pages/AlbumsPage";
import {TodosPage} from "./pages/TodosPage";
import {postService} from "./services/post.service";
import {PostsPage} from "./pages/PostsPage";

const router = createBrowserRouter([
  {
    path: '', element: <MainLayout/>, children: [
      {index: true, element: <Navigate to={'todos'}/>},
      {path: 'todos', element: <TodosPage/>},
      {path: 'albums', element: <AlbumsPage/>},
      {path: 'comments', element: <CommentsPage/>, children: [
          {
            path: 'post/:postId', element: <PostsPage/>,
            loader: ({params: {postId}}) => postService.getById(postId),
          }
        ]},
    ]
  }

]);

export {router};