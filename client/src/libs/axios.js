import axiosLib from "axios";

const axios = axiosLib.create({
  baseURL: process.env.REACT_APP_API_URL,
});

export default axios;