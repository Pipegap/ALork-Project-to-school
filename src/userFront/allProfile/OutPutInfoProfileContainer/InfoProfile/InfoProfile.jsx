import React from "react";
import preloader from "../../../../assets/images/Double Ring-2.1s-200px.svg"

function InfoProfile(props) {

    if (!props.dataBase) {
        return <img src={preloader} alt=""/>
    }


    return (
        <div className='user'>
            <div className='photo'>
                <img src={props.dataBase.photos.small} alt="аватарка" className='userPhoto'/>
            </div>
            <div className='info'>
                <span className='nameSurname'><b>{props.dataBase.fullName}</b></span><br/>
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