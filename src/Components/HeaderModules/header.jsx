import React from "react";
import './Header.module.css';
import {NavLink} from "react-router-dom";
import classes from './Header.module.css';
import preloader from './../../assets/images/Double Ring-2.1s-200px.svg';

function Header (props) {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://cdn0.iconfinder.com/data/icons/network-and-communication-1-8/66/94-512.png" alt=""/>
            <span className={classes.logo_name}>Social Network</span>
            <NavLink to="/profile" className={classes.avatarLink}><img src={(props.store.getState().profilePage.infoUser[0] === undefined) ? preloader : props.store.getState().profilePage.infoUser[0].photos.small} alt="" className={classes.userAva}/></NavLink>
        </header>
    )

};
export default Header;