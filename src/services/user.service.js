import {axiosServicePlaceholder} from "./axios.service";
import {urls} from "../constants/urls";

const userService = {
  getAll: () => axiosServicePlaceholder.get(urls.users.base).then(),
  getById: (id) => axiosServicePlaceholder.get(urls.users.byId(id)).then(),
};

export {userService};