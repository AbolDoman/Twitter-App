import React, {useContext, useReducer} from 'react'
import {getAllHashTagsRealApi, getAllTweetsRealApi} from "../api/api_tweets";

const StateContext = React.createContext(undefined);
const DispatchContext = React.createContext(undefined);

function tweetReducer(state,action) {
    switch (action.type) {
        case "SET_TWEET_TEXT" :
            return {...state,tweetText : action.payload};
        case "SET_TWEET_LIST" :
            return {...state,tweetList : action.payload};
        case "SET_HashTags" :
            return {...state,hashTagList : action.payload};
        case "TOGGLE_OPEN" :
            return {...state,open : !state.open};
        case "SET_TWEET_LIKE" :{
            const foundIndex = state.tweetList.findIndex((row)=> action.payload === row._id);
            if(foundIndex === -1)
                return{...state};
            else{
                return {...state,tweetList: [...state.tweetList.slice(0,foundIndex),{...state.tweetList[foundIndex],likes : state.tweetList[foundIndex].likes +1},...state.tweetList.slice(foundIndex + 1)]}
            }
        }
        default :
            throw new Error(`Unhandled action type: ${action.type}`)
    }
}
function ContextProvider({children}) {
    const [state,dispatch] = useReducer(tweetReducer,{
        tweetText : '',
        tweetList : [],
        hashTagList : [],
        open : false
    });
    return(
    <StateContext.Provider value={state}>
        <DispatchContext.Provider value={dispatch}>
            {children}
        </DispatchContext.Provider>
    </StateContext.Provider>
    )
}
function useTweetState() {
    const context = useContext(StateContext);
    if (context === undefined) {
        throw new Error("useTweetState must be used within a TweetProvider");
    }
    return context;
}
function useTweetDispatch() {
    const context = useContext(DispatchContext);
    if (context === undefined) {
        throw new Error("useTweetDispatch must be used within a TweetProvider");
    }
    return context;

}
function setTweetText(dispatch, tweetText) {
    dispatch({
        type: "SET_TWEET_TEXT",
        payload: tweetText
    });
}
function setTweetList(dispatch, list) {
    dispatch({
        type: "SET_TWEET_LIST",
        payload: list
    });
}

function setTweetLike(dispatch, id) {
    dispatch({
        type: "SET_TWEET_LIKE",
        payload: id
    });
}
function setHashTags(dispatch,hashTagList) {
    dispatch({
        type: "SET_HashTags",
        payload: hashTagList
    });
}
function updateHashTagList(dispatch) {
    getAllHashTagsRealApi((isOk,data) => {
        if(isOk){
            dispatch({
                type: "SET_HashTags",
                payload: data
            });
        }
    });
}
function pageReload(dispatch) {
    getAllTweetsRealApi((isOk,data) => {
        if(isOk){
            dispatch({
                type: "SET_TWEET_LIST",
                payload: data
            });
        }
    });
}
function toggleOpen(dispatch) {
    dispatch({
        type: "TOGGLE_OPEN"
    });
}
export {pageReload,ContextProvider,
    useTweetState,useTweetDispatch,
    setTweetText,setTweetList,
    setTweetLike,setHashTags,
    updateHashTagList,toggleOpen }