import React, {useEffect,} from 'react';
import { useTranslation } from 'react-i18next';
import {useStyles} from './styles'
import Header from "../../component/header/Header";
import Divider from "@mui/material/Divider";
import NewTweet from "./component/NewTweet";
import TweetList from "./component/TweetList";
import HomeIcon from '@mui/icons-material/Home';
import {useTweetDispatch,useTweetState,pageReload} from "../../context/TweetContext";

const Home = () => {
    const {tweetList : tweets} = useTweetState();
    const dispatch = useTweetDispatch();
    const {t} = useTranslation();

    useEffect(() =>{
        pageReload(dispatch);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[tweets]);
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Header headerIcon={<HomeIcon />} headerText={t("home")}/>
            <Divider className={classes.divider}/>
            <NewTweet/>
            <TweetList tweetList={tweets}/>

        </div>
    );
};

export default Home;