import React from "react";
import './Profile.css';
import MakePostContainer from "../components/MyPostsContainer/makePostsContainer";
import OtherMyPostsContainer from "../components/posts/block/otherMyPostsContainer";
import InfoProfileContainer from "./OutPutInfoProfileContainer/InfoProfileContainer";

function ProfileContent(props) {

    return (
        <div className='content'>
            <InfoProfileContainer showContacts={props.showContacts}/>
            <MakePostContainer />
            <OtherMyPostsContainer />
        </div>
    )
};

export default ProfileContent;