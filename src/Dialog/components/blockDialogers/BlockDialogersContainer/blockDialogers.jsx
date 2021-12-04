import React from "react";
import classes from "./blockDialogers.module.css";
import OneExDialoger from "./oneExDialoger/oneExDialoger";
import {NavLink, Redirect} from "react-router-dom";



function BlockDialogers (props) {
    if (!props.auth) {return <Redirect to='/login'/>}


    const dialogerItem = props.dataBaseDialogers.dialogs.map(el => {
        return <NavLink to={el.id} activeClassName={classes.active}><OneExDialoger photo={el.photo} name={el.name} key={el.id} id={el.id}/></NavLink>
    })
    return (
        <div className={classes.allDialogers}>
            { dialogerItem }
        </div>
    );
};

export default BlockDialogers;
