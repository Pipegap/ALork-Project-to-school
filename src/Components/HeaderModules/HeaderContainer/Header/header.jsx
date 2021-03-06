import React from "react";
import '../../Header.module.css';
import {NavLink} from "react-router-dom";
import classes from './../../Header.module.css'
import preloader from './../../../../assets/images/Double Ring-2.1s-200px.svg';

function Header (props) {
    return (
        <header className={classes.header}>
            <img className={classes.logo} src="https://cdn0.iconfinder.com/data/icons/network-and-communication-1-8/66/94-512.png" alt=""/>
            <span className={classes.logo_name}>Social Network</span>
            {(props.authData.checkedIn !== false)
                ? <NavLink to="/profile" className={classes.avatarLink}><img src={(!props.state.profilePage.infoUser[0])
                    ? preloader
                    : props.state.profilePage.infoUser[0].photos.small} alt="" className={classes.userAva}/><div>{(!props.authData.dataFromServer[0].data.login)
                    ? <span>Loading...</span>
                    : <span className={classes.userName}>{props.authData.dataFromServer[0].data.login}</span>}</div></NavLink>
                : <NavLink to='/login'>LOGIN</NavLink>}
        </header>
    )

};
export default Header;