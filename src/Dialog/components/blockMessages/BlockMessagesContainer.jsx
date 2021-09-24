import React from "react";
import {createNewMessageActionCreater, newTextMessageActionCreater} from "../../../Redux/reducers/dialogsReducer";
import BlockMessages from "./BlockMessages";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        dataBase: state,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        createNewMsg: (avatarUser) => {dispatch(createNewMessageActionCreater(avatarUser))},
        onChange: (text) => {dispatch(newTextMessageActionCreater(text))},
    };
};

let BlockMessagesContainer = connect(mapStateToProps, mapDispatchToProps)(BlockMessages);

export default BlockMessagesContainer;