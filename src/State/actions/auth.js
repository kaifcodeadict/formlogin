import { AUTH } from "../constants/actionsTypes";
import * as api from "../../Api/axios";

export const singin = (formData) => async (dispatch) => {
  try {
    console.log(formData);
    const { data } = await api.signIn(formData);
    console.log(data);
    dispatch({ type: AUTH, data });
    const user = await api.getUser(data);
    console.log(user);
  } catch (error) {
    console.log(error);
  }
};
export const singup = (formData) => async (dispatch) => {
  try {
    const { data } = await api.signUp(formData);
    
    dispatch({ type: AUTH, data });

  } catch (error) {
    console.log(error);
  }
};
