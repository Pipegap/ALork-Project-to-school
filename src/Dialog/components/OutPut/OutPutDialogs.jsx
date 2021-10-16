import React from "react";
import classes from './OutPutDialogs.module.css';
import BlockDialogers from "../blockDialogers/BlockDialogersContainer/blockDialogers";
import BlockMessagesContainer from "../blockMessages/BlockMessagesContainer";
import BlockDialogersContainer from "../blockDialogers/BlockDialogersContainer/BlockDialogersContainer";

function Dialog () {
    return (
        <div className={classes.mainBlockDialogs}>
            <BlockDialogersContainer/>
            <BlockMessagesContainer />
        </div>
    );
};




export default Dialog;