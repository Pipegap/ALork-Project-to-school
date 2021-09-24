import React from "react";
import {addPostActionCreater, newTextPostActionCreater} from "../../../Redux/reducers/profileReducer";
import MakePost from "./makePosts";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dataBaseProfilePage: state.profilePage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        newPostText: (text) => {dispatch(newTextPostActionCreater(text))},
        addPost: (avatarUser) => {dispatch(addPostActionCreater(avatarUser))},
    };
};

const MakePostContainer = connect(mapStateToProps, mapDispatchToProps)(MakePost);

export default MakePostContainer;