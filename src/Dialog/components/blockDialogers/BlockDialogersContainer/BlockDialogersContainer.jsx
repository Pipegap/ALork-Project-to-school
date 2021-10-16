import React from "react";
import BlockDialogers from "./blockDialogers";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        dataBaseDialogers: state.dialogsPage,
    };
};


export default connect(mapStateToProps)(BlockDialogers);