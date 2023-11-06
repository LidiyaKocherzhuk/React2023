import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
  getAll: () => axiosService.get(urls.cars.base).then(),
  getById: (id) => axiosService.get(urls.cars.byId(id)).then(),
  create: (data) => axiosService.post(urls.cars.base, data).then(),
  update: (id, data) => axiosService.put(urls.cars.byId(id), data).then(),
  updatePhoto: (id, data) => axiosService.put(urls.cars.photoById(id), data).then(),
  delete: (id) => axiosService.delete(urls.cars.byId(id)).then(),
};

export {carsService}