import React from 'react';
import {useStyles} from "../styles";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from "@mui/material/IconButton";
import {useTweetDispatch,setTweetText,setTweetLike} from "../../../context/TweetContext";
import {postLikesCount} from "../../../api/api_tweets";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";
import Tooltip from "@mui/material/Tooltip";

const Tweet = ({likeCount,text,name,id,img,image,_id}) => {
    const {t} = useTranslation();
    const classes = useStyles();
    const dispatch = useTweetDispatch();

    const renderText = (text) =>{
       return({__html : text.replace(/#\S+/g,"<a href='/tags/$&' style='color: #5DA9DD !important;'>$&</a>")});
    };
    const getPhoto = () => {
        if(!img){
            return '/images/userImages/user-without-image.png'
        }
        return img
    };
    const reTweetClickHandler = () => {
        setTweetText(dispatch,text)
    };
    const likeTweetClickHandler = () => {
        postLikesCount(_id,(isOk,res)=>{
            if(!isOk){
                toast.error(t("error.like"))
            }else{
                setTweetLike(dispatch,_id)
            }
        });
    };

    return (
        <div className={classes.tweet}>
            <Grid container direction={'column'}>
                <Grid item container  direction={"row"}>
                    <img src={getPhoto()} alt={'user'} className={classes.twitterUserImage}/>
                    <Typography className={classes.twitterUserName}>{name}</Typography>
                    <Typography className={classes.twitterUserId}>{id}</Typography>
                </Grid>
                <Grid item>
                    <Typography className={classes.tweetText} component='p' dangerouslySetInnerHTML={renderText(text)} />
                </Grid>
                <div>
                    {
                        image &&
                        image !== 'undefined' &&
                        <div style={{backgroundImage : `url(${image})`}} className={classes.imageOfTweet} />
                    }
                </div>
                <Grid container direction={'row-reverse'}>
                    <Tooltip title={t("reTweet")} arrow>
                        <IconButton>
                            <img src={'/images/pageIcons/retweet-icon-0.jpg'} alt={'reTweetIcon'} className={classes.reTweetIcon} onClick={reTweetClickHandler}/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title={t("likeTweet")} arrow>
                        <IconButton onClick={likeTweetClickHandler}>
                            <FavoriteIcon className={classes.likeTweet}/>
                        </IconButton>
                    </Tooltip>
                    <Typography className={classes.tweetCount}>{likeCount}</Typography>
                </Grid>
            </Grid>
        </div>
    );
};

export default Tweet;