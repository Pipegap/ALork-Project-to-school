import React from "react";
import OtherPosts from "./otherMyPosts";
import {
    addLikeActionCreater,
    deleteLikeActionCreater,
    deletePostActionCreater
} from "../../../../Redux/reducers/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        dataBasePosts: state.profilePage.posts,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addLike: (id) => { dispatch(addLikeActionCreater(id)) },
        deleteLike: (id) => { dispatch(deleteLikeActionCreater(id)) },
        deletePost: (id) => { dispatch(deletePostActionCreater(id)) },
    };
};

let OtherMyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (OtherPosts);

export default OtherMyPostsContainer;

