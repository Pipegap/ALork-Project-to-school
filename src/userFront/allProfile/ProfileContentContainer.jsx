import React from "react";
import ProfileContent from "./profileContent";
import {connect} from "react-redux";
import {setInfoProfileUserAC, setOthUserProfileAC} from "../../Redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {profileAPI} from "../../API/apiRequsets";

class ProfileContentContainer extends React.Component{
    componentDidMount() {
        let userId = this.props.match.params.userId;
        profileAPI.setOtherUsersInfo(userId).then(data => {
            this.props.setOthUserProfileAC(data);
        });
        profileAPI.setUserInfo().then(data => {
            this.props.setInfoProfileUserAC(data);
        });
    }
    render() {
        return (
            <ProfileContent />
        )
    }
};



let ContainerComponentUrlData = withRouter(ProfileContentContainer);
export default connect(null,{setOthUserProfileAC, setInfoProfileUserAC})(ContainerComponentUrlData);