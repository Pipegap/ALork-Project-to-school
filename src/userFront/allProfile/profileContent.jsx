import React from "react";
import './Profile.css';
import MakePostContainer from "../components/MyPostsContainer/makePostsContainer";
import OtherMyPostsContainer from "../components/posts/block/otherMyPostsContainer";
import InfoProfileContainer from "./OutPutInfoProfileContainer/InfoProfileContainer";

function ProfileContent(props) {

    const profilePageItem = props.store.getState().profilePage.infoUser.map(page => {
        return <img src={page.pageProfile}
                    className='profileImage' alt=""/>
    });

    return (
        <div className='content'>
            {profilePageItem}
            <InfoProfileContainer otherUserInfo={props.otherUserInfo}/>
            <MakePostContainer />
            <OtherMyPostsContainer />
        </div>
    )
};

export default ProfileContent;