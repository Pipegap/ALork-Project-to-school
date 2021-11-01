import React from "react";
import InfoProfile from "./InfoProfile/InfoProfile";
import {connect} from "react-redux";




let mapStateToProps = (state) => {
    return {
        dataBase: state.profilePage.infoUser[0],
    }
}


let infoProfile = connect(mapStateToProps)(InfoProfile)

export default infoProfile;