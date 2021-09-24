import React from "react";
import User from '../components/UserModules/user.jsx';
import './Profile.css';
import MakePostContainer from "../components/MyPosts/makePostsContainer";
import OtherMyPostsContainer from "../components/posts/block/otherMyPostsContainer";

function ProfileContent(props) {
    const infoItem = props.store.getState().profilePage.infoUser.map(el => {
        return <User nameSurname={el.name + ' ' + el.surname} age={el.age} city={el.city} info={el.info}
                     myPhoto={el.photo}/>
    })

    const profilePageItem = props.store.getState().profilePage.infoUser.map(page => {
        return <img src={page.pageProfile}
                    className='profileImage' alt=""/>
    });

    return (
        <div className='content'>
            {profilePageItem}
            {infoItem}
            <MakePostContainer/>
            <OtherMyPostsContainer/>
        </div>
    )
};

export default ProfileContent;