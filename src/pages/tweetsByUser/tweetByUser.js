import React, {useEffect} from 'react';
import {useStyles} from './styles'
import Header from "../../component/header/Header";
import TweetList from "../main/component/TweetList";
import PersonIcon from '@mui/icons-material/Person';
import {getAllTweetsByUser} from "../../api/api_tweets";
import {useLocation} from 'react-router-dom'
import {useTweetState,useTweetDispatch,setTweetList} from "../../context/TweetContext";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const TweetByUser = (props) => {
    const classes = useStyles();
    const location = useLocation();
    const {t} =useTranslation();

    const dispatch = useTweetDispatch();
    const {tweetList} = useTweetState();

    useEffect(() =>{
        getAllTweetsByUser(props.match.params.id,(isOk,data) => {
            if(!isOk)
                toast.error(t("error.unSuccessful"));
            setTweetList(dispatch,data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location]);

    return (
        <div className={classes.root}>
            <Header headerText={props.match.params.user} headerIcon={<PersonIcon />}/>
            <TweetList tweetList={tweetList}/>
        </div>
    );
};

export default TweetByUser;