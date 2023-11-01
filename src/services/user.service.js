import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const userService = {
  getAll: () => axiosService.get(urls.users.base).then(),
  getById: (id) => axiosService.get(urls.users.byId(id)).then(),
};

export {userService};