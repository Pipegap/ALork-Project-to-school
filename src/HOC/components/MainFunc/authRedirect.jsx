import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {compose} from "redux";
let mapStateToPropsForRedirect = (state) => {
    return {
        auth: state.auth,
    };
};

export const withAuthRedirect = (Component) => {
   const RedirectComponent = (props) => {
       if (props.auth.dataFromServer.length !== 0) {
           if (props.auth.dataFromServer[0].resultCode !== 0) {return <Redirect to='/login'/>}
       }
       return <Component {...props}/>
   }

   return compose(connect(mapStateToPropsForRedirect))(RedirectComponent);
};
