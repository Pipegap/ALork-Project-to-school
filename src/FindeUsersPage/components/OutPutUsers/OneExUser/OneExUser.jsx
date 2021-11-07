import React from "react";
import classes from './OneExUser.module.css';
import {NavLink} from "react-router-dom";
import userImg from '../../../../assets/images/userImg.png';
import axios from "axios";
import {subscriberAPI} from "../../../../API/apiRequsets";

class OneExUser extends React.Component{

    subscriber = () => {
            if (this.props.followed === false) {
                try {
                    subscriberAPI.subscribe(this.props.id).then(data => {
                        console.log(data);
                        this.props.toggleFollow(this.props.pageId);
                    });
                } catch (error) {
                    console.log('Ошибка - ' + error);
                }
            } else {
                try {
                    subscriberAPI.unsubscribe(this.props.id).then(data => {
                        console.log(data);
                        this.props.toggleFollow(this.props.pageId);
                    });
                } catch (error) {
                    console.log('Ошибка - ' + error);
                }
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