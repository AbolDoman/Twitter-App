import React from 'react';
import Drawer from '@mui/material/Drawer';
import RightSidebar from "../../rightSidebar/RightSidebar";
import {useTweetState,useTweetDispatch,toggleOpen} from "../../../context/TweetContext";

export default function RightDrawer() {
    const dispatch = useTweetDispatch();
    const {open} = useTweetState();

    return (
        <Drawer anchor={'right'} open={open} onClose={()=>{toggleOpen(dispatch)}}>
            <RightSidebar/>
        </Drawer>
    );
}


