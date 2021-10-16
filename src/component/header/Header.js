import React from 'react';
import {useStyles} from "./styles";
import MenuIcon from '@mui/icons-material/Menu';
import {useTweetDispatch,toggleOpen} from "../../context/TweetContext";

const Header = ({headerText,headerIcon}) => {
    const classes = useStyles();
    const dispatch = useTweetDispatch();

    const menuIconClickHandler = () => {
        toggleOpen(dispatch);

    };
    return (
        <div className={classes.header}>
            <MenuIcon className={classes.menuIcon} onClick={menuIconClickHandler}/>
            {headerIcon}
            <div className={classes.headerText}>{headerText}</div>
        </div>
    );
};

export default Header;