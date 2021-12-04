import React from "react";
import preloader from "../../../../assets/images/Double Ring-2.1s-200px.svg"
import classes from "./InfoProfile.module.css"
import userIMG from './../../../../assets/images/userImg.png';

function InfoProfile(props) {

    if (!props.dataBase) {
        return <img src={preloader} alt=""/>
    }


    return (
        <div className='user'>
            <div className='photo'>
                <img src={!props.dataBase.photos.small ? userIMG : props.dataBase.photos.small} alt="аватарка" className='userPhoto'/>
            </div>
            <div className='info'>
                <div className={classes.blockName}>
                    <span className={classes.fullName}><b>{props.dataBase.fullName}</b></span><br/>
                </div>
                <div>
                    {props.showContacts(props.dataBase.contacts)}
                </div>
                <div className='city itemNotName'>{props.dataBase.lookingForAJob === false ?
                    <span>В работе не нуждаюсь</span> : <span>Ищу работу</span>}</div>
                <br/>
                <span className='itemNotName'><b>О себе:</b></span>
                <span className='aboutMyself itemNotName'>{props.dataBase.aboutMe}</span>
            </div>
        </div>
    );
};

export default InfoProfile;