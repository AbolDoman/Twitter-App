import React from 'react';
import {useStyles} from "./styles";
import {useTranslation} from "react-i18next";

const NotFoundPage = () => {
    const {t} = useTranslation();
    const classes  = useStyles();
    return (
        <div className={classes.root}>
            <h1>
                {t("404notFound")}
            </h1>
        </div>
    );
};

export default NotFoundPage;