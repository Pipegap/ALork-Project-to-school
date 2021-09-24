import {combineReducers, createStore} from "redux";
import profileReducer from "./reducers/profileReducer";
import dialogsReducer from "./reducers/dialogsReducer";
import navBarReducer from "./reducers/navBarReducer";
import userReducer from "./reducers/userReducer";


let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    navBar: navBarReducer,
});

let store = createStore(reducers);

export default store;