import {apiService} from "./api.service";
import {urls} from "../constants";

const carService = {
  getAll: () => apiService.get(urls.base).then(),
  create: (data) => apiService.post(urls.base, data).then(),
  update: (id, data) => apiService.put(urls.byId(id), data).then(),
  delete: (id) => apiService.delete(urls.byId(id)).then(),
};

export {carService};