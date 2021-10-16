import React from "react";




function InfoProfile(props) {

    const showUserContacts = props.dataBase.contacts.map(el => {
        if (el.value !== null) {
            return <div><span>Мой {el.name} - <a href={el.value} target='_blank'>{el.name}</a></span> <br/></div>
        } else {
            return null;
        }
    })

    return (
        <div className='user'>
            <div className='photo'>
                <img src={props.dataBase.photos.small} alt="аватарка" className='userPhoto'/>
            </div>
            <div className='info'>
                <span className='nameSurname'><b>{props.dataBase.fullName}</b></span><br/>
                {showUserContacts}
                <div className='city itemNotName'>{props.dataBase.neededInJob === false ? <span>В работе не нуждаюсь</span> : <span>Ищу работу</span>}</div><br/>
                <span className='itemNotName'><b>О себе:</b></span>
                <span className='aboutMyself itemNotName'>{props.dataBase.aboutMe}</span>
            </div>
        </div>
    );
};

export default InfoProfile;