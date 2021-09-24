import React from "react";

function User (props) {

    return (
        <div className='user'>
            <div className='photo'>
                <img src={props.myPhoto} alt="аватарка" className='userPhoto'/>
            </div>
            <div className='info'>
                <span className='nameSurname'><b>{props.nameSurname}</b></span><br/>
                <span className='age itemNotName'>Мне {props.age} лет</span><br/>
                <span className='city itemNotName'>{props.city}</span><br/>
                <span className='itemNotName'><b>О себе:</b></span>
                <span className='aboutMyself itemNotName'>{props.info}</span>
            </div>
        </div>
    )
}

export default User;