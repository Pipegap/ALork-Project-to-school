import React from "react";
import Header from "./Header/header";
import {connect} from "react-redux";
import axios from "axios";
import {setCheckInAC, setDataFromServerAC,} from "../../../Redux/reducers/autherReducer";

class HeaderCC extends React.Component {

    componentDidMount() {
        //let photoProfile = (!this.props.state.profilePage.infoUser[0]) ? null : this.props.state.profilePage.infoUser[0].photos.small;
        //setTimeout(() => {console.log(photoProfile)}, 10000)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true,}).then(response => {
            this.props.setDataFromServerAC(response.data);
            this.props.setCheckInAC();
        });
    };

    render() {
        return (
                <Header state={this.props.state} authData={this.props.authData}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        state: state,
        authData: state.auth,
    }
}

export default connect(mapStateToProps, {setDataFromServerAC, setCheckInAC})(HeaderCC)
