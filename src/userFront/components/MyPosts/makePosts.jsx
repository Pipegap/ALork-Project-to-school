import React from "react";
import classesPosts from './toMakePosts.module.css';
import {renderApp} from "../../../index";



function MakePost ( props ) {

    let getContentPost = React.createRef();

    const onClick = () => {
        let avatarUser = props.dataBaseProfilePage.infoUser[0].photo;
        (getContentPost.current.value !== '') ? props.addPost(avatarUser) : alert('Text Area is empty!');
        renderApp();
    };

    let onChange = () => {
        let text = getContentPost.current.value;
        props.newPostText(text);
    };

    return (
        <div className={classesPosts.MakePosts}>
            <textarea ref={getContentPost} onChange={onChange} value={props.dataBaseProfilePage.newPostText} className={classesPosts.inputPost} name="" cols="50" rows="5" placeholder='Make a post on your page :)'/>
            <div>
                <input className={classesPosts.btnSend} type="submit" value='Опубликовать' onClick={ onClick }/>
            </div>
        </div>
    );
};

export default MakePost;