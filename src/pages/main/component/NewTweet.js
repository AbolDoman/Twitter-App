import React, {createRef, useState} from 'react';
import Grid from "@mui/material/Grid";
import {useStyles} from "../styles";
import Button from "@mui/material/Button";
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import ButtonBase from "@mui/material/ButtonBase";
import {postATweet} from "../../../api/api_tweets";
import {toast} from "react-toastify";
import {
    setTweetText as setTweet,
    useTweetDispatch,
    useTweetState,
    pageReload
} from '../../../context/TweetContext.js';
import {updateHashTagList} from "../../../context/TweetContext";
import {useTranslation} from "react-i18next";


const NewTweet = () => {
    const {t} = useTranslation();
    const classes = useStyles();
    const fileRef = createRef();
    const {tweetText: inputValue} = useTweetState();
    const tweetDispatch = useTweetDispatch();
    const [imageFile,setImageFile] = useState();
    const [filePath,setFilePath] = useState('');

    const inputChangeHandler = (e) => {
        setTweet(tweetDispatch,e.target.value);
    };
    const getImage = () => {
        if(localStorage.getItem('image') && localStorage.getItem('image') !== "undefined")
            return localStorage.getItem('image');
        return "/images/userImages/user-without-image.png";
    };
    const addPhotoBtn = () => {
        fileRef.current.click();
    };
    const changeInputHandler = (e) => {
        if(e.target.files && e.target.files.length > 0){
            setImageFile(e.target.files[0]);
            const reader = new FileReader();
            reader.onload = (e) => {
                setFilePath(e.target.result)
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };
    const newTweetClick = () =>{
        if(inputValue === '')
            return;
        const data = new FormData();
        data.append('text',inputValue);
        if(imageFile)
            data.append('image',imageFile);

        postATweet(data,(isOk,res)=>{
            if(!isOk){
                toast.error(res)
            }else{
                toast.success(t("success.newTweet"))
            }
        });
        pageReload(tweetDispatch);
        setTweet(tweetDispatch,'');
        setFilePath('');
        setImageFile(undefined);
        updateHashTagList(tweetDispatch);
    };
    return (
        <div className={classes.newTweet}>
            <Grid container>
                <img src={getImage()} alt={'user'} className={classes.userImage}/>
                <input placeholder={t("placeHolderTweet")} className={classes.inputNewTweet} value={inputValue} onChange={(e)=>inputChangeHandler(e)}/>
            </Grid>
            <Grid container direction={'row-reverse'}>
                <Button variant={"contained"} className={classes.newTweetBtn} onClick={newTweetClick}>{t("tweet")}</Button>
                <ButtonBase>
                    <AddAPhotoIcon className={classes.addPhotoIcon} onClick={addPhotoBtn}/>
                </ButtonBase>
            </Grid>

            <input ref={fileRef} type={"file"} style={{display : 'none'}} onChange={changeInputHandler}/>
            <div>
                {
                     filePath &&
                     <div  className={classes.imageOfTweet} style={{backgroundImage : `url(${filePath})`}}/>

                }
            </div>
        </div>
    );
};

export default NewTweet;