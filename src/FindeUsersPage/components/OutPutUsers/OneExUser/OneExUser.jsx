import React from "react";
import classes from './OneExUser.module.css';
import {NavLink} from "react-router-dom";
import userImg from '../../../../assets/images/userImg.png';

class OneExUser extends React.Component {
    subscriber = () => {
        this.props.subscriber(this.props.followed, this.props.id, this.props.pageId);
    }


    render() {
        return (
            <div className={classes.block}>
                <div className='blockAvatarFollow'>
                    <div className={classes.img}>
                        <NavLink to={'/profile/' + this.props.id}><img
                            src={(this.props.photos.small != null) ? this.props.photos.small : userImg}
                            alt=""/></NavLink>
                        <div className={classes.btnFollow}>
                            <button onClick={this.subscriber}
                                    disabled={this.props.state.usersPage.subscribingRequests.some(id => id === this.props.id)}>
                                {(!this.props.followed) ? 'Subscribe' : 'Unsubscribe'}
                            </button>
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