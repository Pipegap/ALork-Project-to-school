import React from "react";
import classes from './Navigation.module.css';
import {NavLink} from "react-router-dom";


function Nav (props) {
    return (
        <nav className={classes.navBar}>
            <div className='titleBlock'>
                <span className='menu'>Menu:</span>
            </div>
            <div className={classes.itemBlock}>
                <NavLink to={props.navSate.routes.toProfile} className={`${classes.item}`} activeClassName={classes.active}>{props.navSate.profile}</NavLink>
            </div>
            <div className={classes.itemBlock}>
                <NavLink to={props.navSate.routes.toDialogs} className={classes.item} activeClassName={classes.active}>{props.navSate.messages}</NavLink>
            </div>
            <div className={classes.itemBlock}>
                <NavLink to={props.navSate.routes.toNews} className={classes.item} activeClassName={classes.active}>{props.navSate.news}</NavLink>
            </div>
            <div className={classes.itemBlock}>
                <NavLink to={props.navSate.routes.toFriends} className={classes.item} activeClassName={classes.active}>{props.navSate.friends}</NavLink>
            </div>
            <div className={classes.itemBlock}>
                <NavLink to={props.navSate.routes.toMusik} className={classes.item} activeClassName={classes.active}>{props.navSate.musik}</NavLink>
            </div>
            <div className={classes.itemBlock}>
                <NavLink to={props.navSate.routes.toUsers} className={classes.item} activeClassName={classes.active}>{props.navSate.users}</NavLink>
            </div> <br/>
            <div className={classes.itemBlock}>
                <NavLink to={props.navSate.routes.toSettings} className={classes.item} activeClassName={classes.active}>{props.navSate.settings}</NavLink>
            </div>
        </nav>
    )
};

export default Nav;