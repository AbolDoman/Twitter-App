import React, {useEffect} from 'react';
import {useStyles} from './styles'
import Header from "../../component/header/Header";
import TweetList from "../main/component/TweetList";
import {getAllTweetsByHashTag} from "../../api/api_tweets";
import {useTweetState,useTweetDispatch,setTweetList} from "../../context/TweetContext";
import {useLocation} from 'react-router-dom'
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";

const TweetByHashTag = (props) => {
    const classes = useStyles();
    const {t} =useTranslation();

    const dispatch = useTweetDispatch();
    const {tweetList} = useTweetState();
    const location = useLocation();

    //const [tweetList,setTweetList] = useState([]);
    useEffect(() =>{
        getAllTweetsByHashTag(props.match.params.hashTag,(isOk,data) => {
            if(!isOk)
                toast.error(t("error.unSuccessful"));
            setTweetList(dispatch,data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[location]);

    return (
        <div className={classes.root}>
            <Header headerText={props.match.params.hashTag} headerIcon={<img src={'/images/pageIcons/hashTagLogo.png'} alt={'hashTag'} className={classes.hashTagIcon}/> }/>
            <TweetList tweetList={tweetList}/>

        </div>
    );
};

export default TweetByHashTag;