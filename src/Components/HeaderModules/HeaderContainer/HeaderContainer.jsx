import React from "react";
import Header from "./Header/header";
import {connect} from "react-redux";
import {authUserTC} from "../../../Redux/reducers/autherReducer";

class HeaderCC extends React.Component {

    componentDidMount() {
        this.props.authUserTC();
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

export default connect(mapStateToProps, {authUserTC})(HeaderCC)
