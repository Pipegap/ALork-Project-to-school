import React from "react";
import classes from './oneExMessage.module.css';
import {NavLink} from "react-router-dom";

function OneExMessage(props) {
    return (
        <div className={classes.item}>
            <div className={classes.nameContent}>
                <NavLink to='/profile'><img src={props.photoDialoger} alt=""/></NavLink>
                <span>{props.content}</span>
            </div>
            <div className={classes.time}>
                <span>{props.timeMessage}</span>
            </div>
        </div>
    );
};

export default OneExMessage;