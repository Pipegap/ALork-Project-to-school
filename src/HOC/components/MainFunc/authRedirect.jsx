import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";

let mapStateToPropsForRedirect = (state) => {
    return {
        auth: state.auth.checkedIn,
    };
};

export const withAuthRedirect = (Component) => {
   const RedirectComponent = (props) => {
       if (!props.auth) {return <Redirect to='/login'/>}
       return <Component {...props}/>
   }

   return connect(mapStateToPropsForRedirect)(RedirectComponent);
};
