import React from 'react';
import Tweet from "./Tweet";
import {useTranslation} from "react-i18next";
import {useStyles} from '../styles'

const TweetList = (props) => {
    const [t] = useTranslation();
    const classes = useStyles();
    let value = true;
    if(props.tweetList.length === 0)
        value = false;

    return (
        <div>
            {
                value &&
                props.tweetList.map((tweet,index) =>{
                    return <Tweet key={index} text={tweet.text}
                                  id={tweet.user.id}
                                  name={tweet.user.name}
                                  likeCount={tweet.likes}
                                  img={tweet.user.image}
                                  image = {tweet.image}
                                  _id = {tweet._id}
                    />
                })
            }
            {
                !value &&
                    <div className={classes.noTweetTextParent}>
                        <div className={classes.noTweetText}>
                            {t("emptyTweetList")}
                        </div>
                    </div>
            }
        </div>
    );
};

export default TweetList;