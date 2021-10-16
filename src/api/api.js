import axios from 'axios'

//If we working with json-server
export const AxiosInstanceJsonServer = ()=>{
    return axios.create({
    baseURL : "http://localhost:3000",
})};

//if we working with Real Api and backend
export const AxiosInstanceRealAuth = ()=>{
    return axios.create({
        baseURL : "https://twitterapi.liara.run/api/",
})};

//if we working with Real Api and needs to x-auth-token
export const AxiosInstanceWithXAuthToken = ()=>{
    return axios.create({
        baseURL : "https://twitterapi.liara.run/api/",
         headers : {
             "x-auth-token" : localStorage.getItem('x-auth-token')

         }
})};
