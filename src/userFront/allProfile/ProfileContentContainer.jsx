import React from "react";
import ProfileContent from "./profileContent";
import axios from "axios";
import {connect} from "react-redux";
import {setOthUserProfileAC} from "../../Redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContentContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${(!userId) ? 2 : userId}`).then(response => {
            this.props.setOthUserProfileAC(response.data);
        });
    }
    render() {
        return (
            <ProfileContent showContacts={this.showContacts}/>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        infoUser: state.profilePage.infoUser,
        othUserInfo: state.profilePage.otherUserInfo,
    }
}

let ContainerComponentUrlData = withRouter(ProfileContentContainer);
export default connect(mapStateToProps, {setOthUserProfileAC})(ContainerComponentUrlData);