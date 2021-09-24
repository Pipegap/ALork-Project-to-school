import React from "react";
import {
    followActionCreater,
    newTextSearchActionCreater, setPageIdActionCreater,
    setUsersActionCreater, togleFollowActionCreater,
    unfollowActionCrater
} from "../../Redux/reducers/userReducer";
import {connect} from "react-redux";
import OutPutUsers from "./OutPutUsers/OutPutUsers";

let mapStateToProps = (state) => {
    return {
        dataBaseUserPage: state.usersPage,
        pageCount: state.usersPage.pageCount,
        totalCountUsers: state.usersPage.totalUsers,
        selectedPage: state.usersPage.selectedPage,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        newTextSearch: (text) => {
            dispatch(newTextSearchActionCreater(text))
        },
        toggleFollow: (id) => {
            dispatch(togleFollowActionCreater(id))
        },
        setUsers: (users) => {
            dispatch(setUsersActionCreater(users));
        },
        setPageId: (arr) => {
            dispatch(setPageIdActionCreater(arr))
        },
    };
};

let OutPutUsersContainer = connect(mapStateToProps, mapDispatchToProps)(OutPutUsers);


export default OutPutUsersContainer;