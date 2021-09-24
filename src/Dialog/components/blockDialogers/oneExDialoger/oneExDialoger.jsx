import React from 'react';
import classes from './oneExDialoger.module.css';



function OneExDialoger (props) {
    return (
        <div className={`${classes.item}`}>
            <img src={props.photo} alt=""/>
            <span>{props.name}</span>
        </div>
    );
};

export default OneExDialoger;