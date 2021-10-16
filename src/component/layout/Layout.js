import React, {Fragment, useEffect, useState} from 'react';
import {useStyles} from './styles';
import CssBaseline from "@mui/material/CssBaseline";
import RightSidebar from "../rightSidebar/RightSidebar";
import Divider from "@mui/material/Divider";
import LeftSidebar from "../leftSidebar/LeftSidebar";
import {getUserProfile} from "../../api/api_tweets";
import {useHistory} from 'react-router-dom'
import {toast} from "react-toastify";
import CircularProgress from '@mui/material/CircularProgress';
import {useTranslation} from "react-i18next";
import {useTheme} from "@mui/styles";
import {useMediaQuery} from "@mui/material";
import RightDrawer from "../drawer/rightDrawer/RightDrawer";


const Layout = (props) => {
    const classes = useStyles();
    const history = useHistory();
    const [wait,setWait] = useState(true);
    const {t} = useTranslation();
    const theme = useTheme();
    const isTabletSize = useMediaQuery(theme.breakpoints.down('750'));

    useEffect(()=>{
        getUserProfile((isOk,response) => {
            if(isOk){
                setWait(false);
                localStorage.setItem("name",response.name);
                localStorage.setItem("username",response.username);
                localStorage.setItem("image",response.image);
                localStorage.setItem("x-auth-token",response["x-auth-token"]);
            }else{
                localStorage.clear();
                toast.error(t("error.notFoundYourInformation"));
                history.push('/login');

            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);


    if(wait){
        return<div className={classes.circularP}>
            <CircularProgress />
            <span className={classes.circularProgressText}>{t("wait")}</span>
        </div>
    }
    return (
        <Fragment>
            <CssBaseline />
            <div className={classes.root}>

                {isTabletSize ? <RightDrawer/> : <RightSidebar/>}
                <Divider orientation={'vertical'} className={classes.divider} />
                {props.children}
                <Divider orientation={'vertical'} className={classes.divider} />
                <LeftSidebar/>
            </div>
        </Fragment>
    );
};

export default Layout;