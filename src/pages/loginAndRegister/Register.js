import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useStyles} from "./styles";
import {useState} from "react";
import {toast} from "react-toastify";
import {postRegister} from "../../api/api_tweets";
import {useTranslation} from "react-i18next";

export default function Register() {
    const {t} = useTranslation();
    const classes = useStyles();
    const [fullName,setFullName] = useState();
    const [userName,setUserName] = useState();
    const [password,setPassword] = useState();
    const [confPassword,setConfPassword] = useState();
    const fullNameChangeHandler = (e) => {
        setFullName(e.target.value)
    };
    const userNameChangeHandler = (e) => {
        setUserName(e.target.value)
    };
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    };
    const confPasswordChangeHandler = (e) => {
        setConfPassword(e.target.value)
    };

    const validate = (data) => {
        let str = '';
        if(!data.name)
            str = str + t("reg.name");
        if(!data.username){
            if(str)
                str += ' , ';
            str = str + t("reg.user");
        }
        if(!data.password){
            if(str)
                str += ' , ';
            str = str + t("reg.password");
        }
        if(!data.confPassword){
            if(str)
                str += ' , ';
            str = str + t("reg.confPassword");
        }
        if(str)
            return(str);
        else{
            if(data.password !== data.confPassword)
                str += t("passNotConfPass");
            return(str)
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            name : fullName,
            username : userName,
            password : password,
            confPassword : confPassword
        };
        const user = {
            name : fullName,
            username : userName,
            password : password
        };
        const error = validate(data);
        if(error){
            toast.warn(error)
        }else{
            postRegister(user,(isOk,response)=>{
                if(isOk){
                    toast.success(t("success.reg"));
                    localStorage.setItem("name",response.name);
                    localStorage.setItem("username",response.username);
                    localStorage.setItem("image",response.image);
                    localStorage.setItem("x-auth-token",response["x-auth-token"]);
                    window.location.reload();
                }else{
                    toast.error(response)
                }
            })
        }

    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>

                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}><LockOpenIcon /></Avatar>
                <Typography component="h1" variant="h5">Sign Up</Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="name"
                        label={t("fullName")}
                        value={fullName}
                        onChange={fullNameChangeHandler}
                        name="name"/>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label={t("userName")}
                        value={userName}
                        onChange={userNameChangeHandler}
                        name="userName"
                        autoComplete="email"/>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label={t("password")}
                        value={password}
                        onChange={passwordChangeHandler}
                        type="password"
                        id="password"
                        autoComplete="current-password"/>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confPassword"
                        label={t("confPassword")}
                        value={confPassword}
                        onChange={confPasswordChangeHandler}
                        type="password"
                        id="confPassword" />
                    <FormControlLabel control={<Checkbox value="remember" color="primary" />} label={t("remember")}/>
                    <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }} className={classes.fontSamim2}>{t("register")}</Button>
                </Box>
            </Box>
        </Container>
    );
}