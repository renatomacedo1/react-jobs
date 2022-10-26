import axios from "axios";
import { clearStore } from "../features/user/userSlice";
//import { getUserFromLocalStorage } from "./localStorage";

//  Mine
//  https://jobs-api-renatomacedo.herokuapp.com/api/v1
//  Tutorial
//  https://jobify-prod.herokuapp.com/api/v1/toolkit

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

// TODO Fix later
// Adds headers to all customFetch if user exists. Without interceptors, headers could be added in each request
// customFetch.interceptors.request.use((config)=>{
//   const user = getUserFromLocalStorage();
//   if(user){
//     config.headers.common['Authorization'] = `Bearer ${user.token}`;
//   }
//   return config
// })

export const checkForUnauthorizedResponse = (error, thunkAPI) => {
  if (error.response.status === 401) {
    thunkAPI.dispatch(clearStore());
    return thunkAPI.rejectWithValue("Unauthorized! Logging out...");
  }
  return thunkAPI.rejectWithValue(error.response.data.msg);
};

export default customFetch;
