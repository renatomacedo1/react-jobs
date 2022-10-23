import axios from "axios";
import { getUserFromLocalStorage } from "./localStorage";

//  Mine
//  https://jobs-api-renatomacedo.herokuapp.com/api/v1
//  Tutorial
//  https://jobify-prod.herokuapp.com/api/v1/toolkit

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

// Adds headers to all customFetch if user exists. Without interceptors, headers could be added in each request
// customFetch.interceptors.request.use((config)=>{
//   const user = getUserFromLocalStorage();
//   if(user){
//     config.headers.common['Authorization'] = `Bearer ${user.token}`;
//   }
//   return config
// })

export default customFetch;
