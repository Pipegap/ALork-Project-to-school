import React from "react";
import ProfileContent from "./profileContent";
import {connect} from "react-redux";
import {setUsersInfoTC} from "../../Redux/reducers/profileReducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContentContainer extends React.Component{

    componentDidMount() {
        let userId = this.props.match.params.userId;
        this.props.setUsersInfoTC(userId);
    }
    render() {
        if (!this.props.auth) {return <Redirect to='/login' t/>}
        return (
            <ProfileContent />
        )
    }
};


const mapStateToProps = (state) => {
    return {
        auth: state.auth.checkedIn,
    }
}

let ContainerComponentUrlData = withRouter(ProfileContentContainer);
export default connect(mapStateToProps,{setUsersInfoTC})(ContainerComponentUrlData);