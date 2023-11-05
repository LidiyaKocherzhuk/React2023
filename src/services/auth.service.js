import {axiosService} from "./axios.service";

import {urls} from "../constants";

const authService = {
  
  register(data) {
    return axiosService.post(urls.auth.register, data).then();
  },
  
  async login(loginData) {
    const {data} = await axiosService.post(urls.auth.login, loginData).then();
    const {access} = data;
    console.log(data);
    
    if (access) {
      this.setToken(data.access);
    }
    
    return data;
  },
  
  setToken(token) {
    localStorage.setItem('accessToken', token);
  },
  
  deleteToken(token) {
    localStorage.removeItem('accessToken');
  },
  
};

export {authService};