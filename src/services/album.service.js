import {axiosService} from "./axios.service";
import {urls} from "../constants/urls";

const albumService = {
  getAll: () => axiosService.get(urls.albums.base).then(),
};

export {albumService};