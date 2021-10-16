import React, {useEffect} from 'react';
import {useStyles} from './styles';
import Grid from "@mui/material/Grid";
import ButtonBase from "@mui/material/ButtonBase";
import {Link} from "react-router-dom";
import {getAllHashTagsRealApi} from "../../api/api_tweets";
import {useTweetState, useTweetDispatch, setHashTags as setHashTagList, toggleOpen} from "../../context/TweetContext";
import {useTranslation} from "react-i18next";
import {toast} from "react-toastify";

const RightSidebar = () => {
    const classes = useStyles();
    const {t} = useTranslation();
    const dispatch = useTweetDispatch();
    const {hashTagList} = useTweetState();

    useEffect(() =>{
        getAllHashTagsRealApi((isOk,data) => {
            if(!isOk)
                toast.error(t("error.unSuccessful"));
            setHashTagList(dispatch,data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    const closeClickHandler = () => {
        toggleOpen(dispatch);
    };
    return (
        <div className={classes.root} onClick={closeClickHandler}>
            <Link to={'/'} >
                <Grid container direction={'row'} alignItems={'center'} >
                    <Grid item xs={4}>
                        <img src={'/images/pageIcons/twitter.png'} alt={"Tweeter"} className={classes.logo}/>
                    </Grid>
                    <Grid item xs={8}>
                        <h1 className={classes.logoType}>{t("appName")}</h1>
                    </Grid>
                </Grid>
            </Link>
            <Grid item xs={12} className={classes.hottestHashTags}>
                <h2>{t("hottestHashTags")}</h2>
            </Grid>

            <Grid container direction={'column'} >
                {
                    hashTagList.map((hash,index) => {
                        return(
                            <Link key={index} to={'/hashTags/'+hash.text}>
                                <Grid container  alignItems={'center'} >
                                    <ButtonBase className={classes.parent}>
                                        <Grid item xs={3}>
                                            <img src={'/images/pageIcons/hashTagLogo.png'} className={classes.hashTagLogo} alt={"hashTag"}/>
                                        </Grid>
                                        <Grid item xs={9}>
                                            <div className={classes.hashTagText}>{hash.text}</div>
                                        </Grid>
                                    </ButtonBase>
                                </Grid>
                            </Link>
                        )
                    })
                }
            </Grid>
        </div>
    );
};
export default RightSidebar;