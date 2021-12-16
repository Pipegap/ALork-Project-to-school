import React from "react";
import ProfileContent from "./profileContent";
import {connect} from "react-redux";
import {setUsersInfoTC} from "../../Redux/reducers/profileReducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../HOC/components/MainFunc/authRedirect";
import {compose} from "redux";

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
}

export default compose(withRouter, withAuthRedirect, connect(null, {setUsersInfoTC}))(ProfileContentContainer);