import React from "react";
import classes from "../postsComments.module.css";


function OtherPosts(props) {
    return (
        <div className={classes.block}>
            { props.postsItem() }
        </div>
    );
};

export default OtherPosts;