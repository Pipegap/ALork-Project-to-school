import React from "react";
import classes from './OneExUser.module.css';
import {NavLink} from "react-router-dom";
import userImg from '../../../../assets/images/userImg.png';
import axios from "axios";

class OneExUser extends React.Component{

    subscriber = async () => {
            if (this.props.followed === false) {
                try {
                    await axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + this.props.id, {}, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': '2e59a84e-1059-46ce-b1b1-947730f9d7fc'
                        }
                    }).then(response => {
                        console.log(response.data);
                    });
                } catch (error) {
                    console.log(error);
                }
                this.props.toggleFollow(this.props.pageId)
            } else {
                try {
                    await axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/` + this.props.id, {
                        withCredentials: true,
                        headers: {
                            'API-KEY': '2e59a84e-1059-46ce-b1b1-947730f9d7fc'
                        }
                    }).then(response => {
                        console.log(response.data);
                    });
                } catch (error) {
                    console.log(error);
                }
                this.props.toggleFollow(this.props.pageId)
            }
        }

    render() {
        return (
            <div className={classes.block}>
                <div className='blockAvatarFollow'>
                    <div className={classes.img}>
                        <NavLink to={'/profile/' + this.props.id}><img src={(this.props.photos.small != null) ? this.props.photos.small : userImg} alt=""/></NavLink>
                        <div className={classes.btnFollow} onClick={this.subscriber}>
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