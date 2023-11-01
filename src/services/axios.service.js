import axios from "axios";

import {placeholderURL, spaceXURL} from "../constants/urls";

const axiosServicePlaceholder = axios.create({baseURL: placeholderURL});
const axiosServiceSpaceX = axios.create({baseURL: spaceXURL});

export {axiosServicePlaceholder, axiosServiceSpaceX};