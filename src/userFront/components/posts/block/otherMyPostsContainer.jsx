import React from "react";
import {
    toggleLikeAC,
    deletePostAC
} from "../../../../Redux/reducers/profileReducer";
import {connect} from "react-redux";
import OneEx from "../oneExample/oneEx";
import OtherPosts from "./showAllPosts/OtherPosts";

class OtherMyPostsClassComponent extends React.Component{


    postsItem = () => {
        const postsItem = this.props.dataBasePosts.map(el => {
            return <OneEx img={el.photo} liked={el.liked}
                          message={el.word} likes={el.likes}
                          id={el.id} toggleLike={this.props.toggleLikeAC}
                          deletePost={this.props.deletePostAC} />
        });
        return postsItem;
    };

    render() {
        return (
            <OtherPosts postsItem={this.postsItem}/>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        dataBasePosts: state.profilePage.posts,
    };
};

export default connect(mapStateToProps, {toggleLikeAC, deletePostAC,}) (OtherMyPostsClassComponent);

