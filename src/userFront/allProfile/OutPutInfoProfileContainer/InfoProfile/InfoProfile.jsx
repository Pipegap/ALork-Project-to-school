import React from "react";
import connect from "react-redux";




function InfoProfile(props) {
    return (
        <div className='user'>
            <div className='photo'>
                <img src={props.dataBase.photos.small} alt="аватарка" className='userPhoto'/>
            </div>
            <div className='info'>
                <span className='nameSurname'><b>{props.dataBase.fullName}</b></span><br/>
                <span className='age itemNotName'>Мой ВК - <a href={props.dataBase.contacts.vk} target='_blank'>вк</a></span><br/>
                <div className='city itemNotName'>{props.dataBase.neededInJob === false ? <span>В работе не нуждаюсь</span> : <span>Ищу работу</span>}</div><br/>
                <span className='itemNotName'><b>О себе:</b></span>
                <span className='aboutMyself itemNotName'>{props.dataBase.aboutMe}</span>
            </div>
        </div>
    );
};

export default InfoProfile;