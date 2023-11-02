import {axiosService} from './axiosService';
import {urls} from '../constants/urls';

const carService = {
  getAll: () => axiosService.get(urls.base).then(),
  getById: (id) => axiosService.get(urls.byId(id)).then(),
  create: (car) => axiosService.post(urls.base, car).then(),
  update: (id, car) => axiosService.put(urls.byId(id), car).then(),
  delete: (id) => axiosService.delete(urls.byId(id)).then(),
};

export {carService};