import React from "react";
import {addPostAC, newTextPostAC} from "../../../Redux/reducers/profileReducer";
import {connect} from "react-redux";
import EnteringPostContent from "./EnteringPostContent/enteringPostContent";


class MakePostsClassComponent extends React.Component{

    getContentPost = React.createRef();

    onClick = () => {
        let avatarUser = this.props.dataBaseProfilePage.infoUser[0].photos.small;
        (this.getContentPost.current.value !== '') ? this.props.addPostAC(avatarUser) : alert('This post has no anything !');
    };

    onChange = () => {
        let text = this.getContentPost.current.value;
        this.props.newTextPostAC(text);
    };

    render() {
        return (
            <EnteringPostContent onChange={this.onChange} onClick={this.onClick} getContentPost={this.getContentPost} dataBaseProfilePage={this.props.dataBaseProfilePage}/>
        );
    }
};




let mapStateToProps = (state) => {
    return {
        dataBaseProfilePage: state.profilePage,
    };
};

export default connect(mapStateToProps, {addPostAC, newTextPostAC,})(MakePostsClassComponent);