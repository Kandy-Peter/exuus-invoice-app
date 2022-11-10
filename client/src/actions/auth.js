import * as api from "../api";
import { toast } from 'react-toastify';

export const signin = (formData, history) => async (dispatch) => {
  try {
    // login the user
    const { data } = await api.signIn(formData);
    dispatch({ type: "AUTH", data });
    history("/");
    toast.success("Logged in successfully");
  } catch (error) {
    dispatch({ type: "ERROR", data: error?.response?.data });
    toast.error(error?.response?.data?.message);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await api.signUp(formData);
    dispatch({ type: "AUTH", data });
    history("/auth");
    toast.success("Signed up successfully");
  } catch (error) {
    dispatch({ type: "ERROR", data: error?.response?.data });
    toast.error(error?.response?.data?.message);
  }
};
