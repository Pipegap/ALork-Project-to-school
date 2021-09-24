import React from "react";
import classes from './OutPutDialogs.module.css';
import BlockDialogers from "../blockDialogers/blockDialogers";
import BlockMessagesContainer from "../blockMessages/BlockMessagesContainer";

function Dialog (props) {
    return (
        <div className={classes.mainBlockDialogs}>
            <BlockDialogers dataBaseDialogers={props.store.getState().dialogsPage}/>
            <BlockMessagesContainer />
        </div>
    );
};




export default Dialog;