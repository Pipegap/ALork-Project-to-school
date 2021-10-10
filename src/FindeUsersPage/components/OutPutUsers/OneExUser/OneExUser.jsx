import React from "react";
import classes from './OneExUser.module.css';
import {NavLink} from "react-router-dom";
import userImg from '../../../../assets/images/userImg.png';
import axios from "axios";


class OneExUser extends React.Component{

    onClick = () => {
        this.props.toggleFollow(this.props.pageId);
    };

    getUserInfo = (id) => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/19448`).then(response => {
            console.log(response.data);
        })
    };

    render() {
        return (
            <div className={classes.block}>
                <div className='blockAvatarFollow'>
                    <div className={classes.img}>
                        <NavLink to={'/profile/' + this.props.id}><img onClick={this.getUserInfo} src={(this.props.photos.small != null) ? this.props.photos.small : userImg} alt=""/></NavLink>
                        <div className={classes.btnFollow} onClick={this.onClick}>
                            <a href="#">{(this.props.followed === false) ? 'Subscribe' : 'Unsubscribe'}</a>
                        </div>
                    </div>
                </div>

                <div className={classes.info}>
                    <div className={classes.container}>
                        <div className={classes.insideContent}>
                            <div className={classes.nameSurnameCity}>
                                <span>{this.props.name}</span> <br/>
                                <span>{this.props.city}</span>
                            </div>
                            <div className={classes.ageInfo}>
                                <span>Возраст: {this.props.age} лет</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

export default OneExUser;