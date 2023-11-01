import {axiosServiceSpaceX} from "./axios.service";
import {urls} from "../constants/urls";

const spaceXService = {
  getAll: () => axiosServiceSpaceX.get(urls.spaceX.base).then(),
  getExcludeYear: (year) => axiosServiceSpaceX.get(urls.spaceX.excludeYear(year)).then(),
};

export {spaceXService};