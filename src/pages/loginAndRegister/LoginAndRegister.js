import React, {useState} from 'react';
import Paper from "@mui/material/Paper";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import {useStyles} from "./styles";
import Login from "./Login";
import Register from "./Register";
import {useTranslation} from "react-i18next";

const LOGIN_TAB_VALUE = 1;
const REGISTER_TAB_VALUE = 2 ;

const LoginAndRegister = () => {
    const {t} = useTranslation();
    const classes = useStyles();
    const [value,setValue] = useState(LOGIN_TAB_VALUE);


    const handleChange = () => {
        if(value === LOGIN_TAB_VALUE) {
            setValue(REGISTER_TAB_VALUE)
        }else{
            setValue(LOGIN_TAB_VALUE)
        }
    };
    return (
        <div className={classes.root}>
            <Paper className={classes.header}>
                <Tabs value={value} onChange={handleChange} aria-label="login and register tabs">
                    <Tab className={classes.LRBtn} value={LOGIN_TAB_VALUE} label={t("logIn")} wrapped/>
                    <Tab className={classes.LRBtn} value={REGISTER_TAB_VALUE} label={t("register")} />
                </Tabs>
                {value === LOGIN_TAB_VALUE &&
                    <Login render={handleChange}/>
                }
                {value === REGISTER_TAB_VALUE &&
                    <Register render={handleChange}/>
                }
            </Paper>
        </div>
    );
};
export default LoginAndRegister;