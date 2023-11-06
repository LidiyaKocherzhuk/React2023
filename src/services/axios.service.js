import axios from "axios";

import {baseURL} from "../constants";
import {authService} from "./auth.service";

const axiosService = axios.create({baseURL});

axiosService.interceptors.request.use(request => {
  const accessToken = authService.getToken();
  
  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }
  
  return request;
  
})

export {axiosService};