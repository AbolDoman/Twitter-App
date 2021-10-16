import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {useStyles} from "./styles";
import {useState} from "react";
import {toast} from "react-toastify";
import {postLogin} from "../../api/api_tweets";
import {useTranslation} from "react-i18next";

export default function Login(props) {
    const classes = useStyles();
    const {t} = useTranslation();
    const [password,setPassword] = useState('');
    const [userName,setUserName] = useState('');

    const validate = (data) => {
        let str = '';
        if(!data.username)
            str = str + t("validate.userName");
        if(!data.password){
            if(str)
                str += '\n';
            str = str + t("validate.password");
        }
        return(str);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {
            username: userName,
            password: password,
        };
        const isValid = validate(data);
        if(isValid){
            toast.warn(isValid)
        }else {
            postLogin(data,(isOk,response)=>{
                if(isOk){
                    toast.success(t("validate.isSuccess"));
                    localStorage.setItem("name",response.name);
                    localStorage.setItem("username",response.username);
                    localStorage.setItem("x-auth-token",response["x-auth-token"]);
                    localStorage.setItem("image",response.image);
                    window.location.reload();
                }else{
                    toast.error(response)
                }
            })
        }
    };
    const changeState = () => {
        props.render();
    };
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    };
    const userNameChangeHandler = (e) => {
        setUserName(e.target.value)
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
                    <Avatar
                        sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">Sign in</Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="userName"
                            label={t("userName")}
                            value={userName}
                            onChange={(e) => userNameChangeHandler(e)}
                            name="userName"
                            autoComplete="email" />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label={t("password")}
                            value={password}
                            onChange={(e) => passwordChangeHandler(e)}
                            type="password"
                            id="password"
                            autoComplete="current-password"/>

                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label={t("remember")}/>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            className={classes.fontSamim2}>{t("logIn")}</Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2" className={classes.fontSamim}>
                                    {t("forgotPassword")}
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={changeState} className={classes.fontSamim}>
                                    {`SignUp ${t("alreadyHaveAnAccount")}`}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
    );
}