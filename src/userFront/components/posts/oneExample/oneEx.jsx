import React from "react";
import oneEx from './forOneEx.module.css';
import {addLikeAC} from "../../../../Redux/reducers/profileReducer";

function OneEx (props) {

    const onClick = () => {
        props.toggleLike(props.id);
    };
    const deletePost = () => {
        props.deletePost(props.id);
    };
    return (
        <div className={oneEx.MakePosts}>
            <a href="#"><img src={props.img} alt=""/></a>
            <span className={oneEx.item}>{props.message}</span>
            <div className={oneEx.blockPost}>
                <div className={oneEx.blockCountLikes}>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_126115.png" alt="" onClick={deletePost}/>
                    <img src="http://cdn.onlinewebfonts.com/svg/img_529688.png" alt="" onClick={onClick}/>
                    <span>{props.likes}</span>
                </div>
            </div>
        </div>
    )
}

export default OneEx;
