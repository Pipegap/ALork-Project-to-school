import React from "react";
import ProfileContent from "./profileContent";
import {connect} from "react-redux";
import {setUsersInfoTC} from "../../Redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/components/MainFunc/authRedirect";

class ProfileContentContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setUsersInfoTC(userId);
    }
    render() {
        return (
            <ProfileContent />
        )
    }
};




let ContainerComponentUrlData = withRouter(ProfileContentContainer);
export default connect(null,{setUsersInfoTC})(withAuthRedirect(ContainerComponentUrlData));