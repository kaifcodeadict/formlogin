import axios from "axios";

const API = axios.create({
  baseURL: "http://13.127.127.40/api/"
});







export const signIn = (formData) =>
  API.post("token/", formData);
export const signUp = (formData) =>
  API.post("user/", formData);
export const getUser = () =>
  API.get(`user/`);
