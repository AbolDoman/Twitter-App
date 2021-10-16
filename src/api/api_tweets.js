import {AxiosInstanceJsonServer, AxiosInstanceRealAuth, AxiosInstanceWithXAuthToken} from "./api";

//Get data from json-server
export const getAllTweetsJsonServer = (callback) => {
    AxiosInstanceJsonServer().get('/tweets')
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
export const getAllHashTags = (callback) => {
    AxiosInstanceJsonServer().get('/hashTags')
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
export const getAllUsers = (callback) => {
    AxiosInstanceJsonServer().get('/users')
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};


//Get data's from Real Api
export const postLogin = (data,callback) => {
    AxiosInstanceRealAuth().post('login',data)
         .then((res) => callback(true,res.data))
         .catch((err) => callback(false,err.response.data.message))
};
export const postRegister = (data,callback) => {
    AxiosInstanceRealAuth().post('register',data)
         .then((res) => callback(true,res.data))
         .catch((err) => callback(false,err.response.data.message))
};
export const uploadUserPhoto = (data,callback) => {
    AxiosInstanceWithXAuthToken().post('uploadUserPhoto',data)
         .then((res) => callback(true,res.data))
         .catch((err) => callback(false,err.response.data.message))
};
export const getAllTweetsRealApi = (callback) => {
    AxiosInstanceWithXAuthToken().post('getAllTweet')
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
export const postATweet = (data,callback) => {
    AxiosInstanceWithXAuthToken().post('newTweet',data)
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
export const getAllHashTagsRealApi = (callback) => {
    AxiosInstanceWithXAuthToken().get('getAllHashTags')
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
export const getAllUsersRealApi = (callback) => {
    AxiosInstanceWithXAuthToken().get('getAllUser')
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
export const postLikesCount = (id,callback) => {
    AxiosInstanceWithXAuthToken().get('likeTweet/'+id)
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
export const getAllTweetsByHashTag = (hashTag,callback) => {
    AxiosInstanceWithXAuthToken().post('getAllTweet',{hashTag})
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
export const getAllTweetsByUser = (user,callback) => {
    AxiosInstanceWithXAuthToken().post('getAllTweet',{user})
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};
export const getUserProfile = (callback) => {
    AxiosInstanceWithXAuthToken().get('getProfile')
        .then((res) => callback(true,res.data))
        .catch((err) => callback(false,err))
};

