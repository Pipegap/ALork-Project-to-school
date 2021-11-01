import React from "react";
import preloader from "../../../../assets/images/Double Ring-2.1s-200px.svg"

function InfoProfile(props) {

    if (!props.dataBase) {
        return <img src={preloader} alt=""/>
    }

    let finalContactsFormat = [];

    const showContacts = (obj, array) => {
        for (let key in obj) {
            if (obj[key] !== null) {
                let oneContact = {
                    value: obj[key],
                    name: key,
                }
                array.push(oneContact);
            }
        }
        return array.map(el => {
            return <span>Мой {el.name} - <a href={el.value} target="_blank"><b>{el.name}</b></a><br/></span>
        })
    }

    return (
        <div className='user'>
            <div className='photo'>
                <img src={props.dataBase.photos.small} alt="аватарка" className='userPhoto'/>
            </div>
            <div className='info'>
                <span className='nameSurname'><b>{props.dataBase.fullName}</b></span><br/>
                <div>
                    {showContacts(props.dataBase.contacts, finalContactsFormat)}
                </div>
                <div className='city itemNotName'>{props.dataBase.neededInJob === false ?
                    <span>В работе не нуждаюсь</span> : <span>Ищу работу</span>}</div>
                <br/>
                <span className='itemNotName'><b>О себе:</b></span>
                <span className='aboutMyself itemNotName'>{props.dataBase.aboutMe}</span>
            </div>
        </div>
    );
};

export default InfoProfile;