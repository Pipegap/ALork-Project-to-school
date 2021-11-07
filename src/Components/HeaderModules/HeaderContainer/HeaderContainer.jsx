import React from "react";
import Header from "./Header/header";
import {connect} from "react-redux";
import {setCheckInAC, setDataFromServerAC,} from "../../../Redux/reducers/autherReducer";
import {authAPI} from "../../../API/apiRequsets";

class HeaderCC extends React.Component {

    componentDidMount() {
        authAPI.authUser().then(data => {
            this.props.setDataFromServerAC(data);
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
