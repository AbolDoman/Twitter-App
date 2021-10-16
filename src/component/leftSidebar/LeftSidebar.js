import React, {createRef, useEffect, useState} from 'react';
import {useStyles} from "./styles";
import Grid from "@mui/material/Grid";
import {Divider} from "@mui/material";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {getAllUsersRealApi, uploadUserPhoto} from "../../api/api_tweets";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";


const LeftSidebar = () => {
    const inputRef = createRef();
    const [imagePath,setImagePath] = useState();
    const {t,i18n} = useTranslation();
    const classes = useStyles();
    const [reporterList,setReporterList] = useState([]);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);

    useEffect(() =>{
        getAllUsersRealApi((isOk,data) => {
            if(!isOk)
                toast.error(t("error.unSuccessFull"));
            setReporterList(data);
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleLogoutAccount = () => {
        setAnchorEl(null);
        localStorage.removeItem("name");
        localStorage.removeItem("username");
        localStorage.removeItem("image");
        localStorage.removeItem("x-auth-token");
        window.location.reload();
    };
    const handleEditProfile = () => {
        setAnchorEl(null);
        inputRef.current.click();
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getImage = () => {
        if(imagePath){
            localStorage.setItem('image',imagePath);
        }
        if(localStorage.getItem('image') && localStorage.getItem('image') !== "undefined")
            return localStorage.getItem('image');
        return "images/userImages/add-user-icon.png";
    };
    const handleAvatarChange = (e) => {
        if(e.target.files && e.target.files.length > 0){

            const reader = new FileReader();
            reader.onload = (e) => {
                setImagePath(e.target.result);
            };
            reader.readAsDataURL(e.target.files[0]);

            const data = new FormData();
            data.append('image',e.target.files[0]);
            uploadUserPhoto(data,(isOk,res)=>{
                if(!isOk){
                    toast.error(res);
                }else{
                    toast.success(t("success.uploadedPhoto"))
                }
            });
        }
    };
    const handleChangeLanguage = () => {
        if(i18n.language === 'en'){
            i18n.changeLanguage('fa');
            localStorage.setItem('lang','fa');
        }else{
            i18n.changeLanguage('en');
            localStorage.setItem('lang','en');
        }
    };
    return (
        <div className={classes.root}>
            <Grid container alignItems={'center'} direction={'row-reverse'}>
                <Grid item xs={3}>
                    <img src={getImage()} alt={'user-prof'} className={classes.imageProf} onClick={handleEditProfile} style={{cursor : 'pointer'}} />
                </Grid>
                <Grid item container direction={'column'} xs={9} className={classes.userProf}>
                    <div  className={classes.nameProf}>{localStorage.getItem('name')}</div>
                    <div  className={classes.idProf}>{localStorage.getItem('username')}</div>
                </Grid>
            </Grid>

            <Button
                id="demo-positioned-button"
                aria-controls="demo-positioned-menu"
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
                className={classes.fontSamim}>
                {t("settings")}
            </Button>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
               >
                <MenuItem onClick={handleEditProfile} className={classes.fontSamim}>{t("editProfile")}</MenuItem>
                <MenuItem onClick={handleChangeLanguage} className={classes.fontSamim}>{t("changeLanguage")}</MenuItem>
                <MenuItem onClick={handleLogoutAccount} className={classes.fontSamim}>{t("logout")}</MenuItem>
            </Menu>
            <input ref={inputRef} type={'file'} style={{display:"none"}} onChange={(e)=>handleAvatarChange(e)}/>



            <Grid container direction={'column'} >
                <Grid container className={classes.reportersList} >
                    <div className={classes.reportersListHeader}>{t("bestReporters")}</div>

                    <Divider className={classes.repDivider} />

                    {
                        reporterList.map((rep,index) => {
                            const getImage = () => {
                                if(rep.image && rep.image !== 'undefined')
                                    return rep.image;
                                return '/images/userImages/user-without-image.png'
                            };
                            return(
                                <Link key={index} to={`/users/${rep.name}/${rep._id}`} className={classes.repLink}>
                                    <Grid  container alignItems={'center'} direction={'row'} className={classes.repContainer}>
                                        <Grid item xs={3} className={classes.reporterImageProfParent}>
                                            <img src={getImage()} alt={`${rep.name}-prof`} className={classes.reporterImageProf} />
                                        </Grid>
                                        <Grid item  container direction={'column'} xs={6} className={classes.reporterProf}>
                                            <div  className={classes.nameProf}>{rep.name}</div>
                                            <div  className={classes.idProf}>{rep.username}</div>
                                        </Grid>
                                    </Grid>
                                    {(index !== reporterList.length -1) && <Divider  key={Math.floor(Math.random()*1000)} className={classes.repDivider} />}
                                </Link>
                            )
                        })
                    }

                </Grid>
            </Grid>
        </div>
    );
};

export default LeftSidebar;
