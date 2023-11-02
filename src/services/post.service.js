import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const postService = {
  getById: (id) => axiosService.get(urls.posts.byPostId(id)).then(),
};

export {postService};