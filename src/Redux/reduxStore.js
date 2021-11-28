import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import navBarReducer from "./reducers/navBarReducer";
import userReducer from "./reducers/userReducer";
import autherReducer from "./reducers/autherReducer";
import thunkMiddleware from "redux-thunk";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    navBar: navBarReducer,
    auth: autherReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;