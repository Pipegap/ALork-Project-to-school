import React from "react";
import ProfileContent from "./profileContent";
import axios from "axios";
import {connect} from "react-redux";
import {setOthUserProfileAC} from "../../Redux/reducers/profileReducer";

class ProfileContentContainer extends React.Component{

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setOthUserProfileAC(response.data);
        });
    }

    render() {
        return (
            <ProfileContent {...this.props} otherUserInfo={this.props.otherUserInfo}/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        othUserInfo: state.profilePage.otherUserInfo,
    }
}

export default connect(mapStateToProps, {setOthUserProfileAC})(ProfileContentContainer);