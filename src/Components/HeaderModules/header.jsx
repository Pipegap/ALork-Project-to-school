import React from "react";
import './Header.module.css';
import {NavLink} from "react-router-dom";
import classes from './Header.module.css';

function Header () {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://cdn0.iconfinder.com/data/icons/network-and-communication-1-8/66/94-512.png" alt=""/>
            <span className={classes.logo_name}>Social Network</span>
            <NavLink to="/profile" className={classes.avatarLink}><img src="https://pbs.twimg.com/profile_images/801633757228912640/XJdZjO7T.jpg" alt="" className={classes.userAva}/></NavLink>
        </header>
    )
};

export default Header;