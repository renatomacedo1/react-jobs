import axios from "axios";

//  Mine
//  https://jobs-api-renatomacedo.herokuapp.com/api/v1
//  Tutorial
//  https://jobify-prod.herokuapp.com/api/v1/toolkit

const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});

export default customFetch;
