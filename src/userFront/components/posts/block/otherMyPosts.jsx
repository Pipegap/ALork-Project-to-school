import React from "react";
import OneEx from "../oneExample/oneEx";
import classes from './postsComments.module.css';

function OtherPosts (props) {

    const postsItem = props.dataBasePosts.map(el => {
        return <OneEx img={el.photo} liked={el.liked} message={el.word} likes={el.likes} id={el.id} addLike={props.addLike} deleteLike={props.deleteLike} deletePost={props.deletePost}/>
    });
    return (
        <div className={classes.block}>
            { postsItem }
        </div>
    )
}

export default OtherPosts;

