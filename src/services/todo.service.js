import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const todoService = {
  getAll: () => axiosService.get(urls.todos.base).then(),
};

export {todoService};