import React from "react";
import './App.css';
import Header from "./Components/HeaderModules/header.jsx";
import Nav from "./Components/NavBarModules/navigation.jsx";
import Dialog from "./Dialog/components/OutPut/OutPutDialogs";
import {BrowserRouter, Route} from "react-router-dom";
import OutPutNews from "./News/components/OutPut/OutPutNews";
import OutPutMusik from "./Musik/components/OutPut/OutPutMusik";
import OutPutSettings from "./Settings/components/OutPut/OutPutSettings";
import OutPutFriends from './Friends/components/OutPutFriends/OutPutFriends';
import OutPutPage from "./FindeUsersPage/components/OutPutPage";
import ProfileContentContainer from "./userFront/allProfile/ProfileContentContainer";



function App (props) {
    return (
        <BrowserRouter>
            <div className="MyApp">
                <Header/>
                <Nav navSate={props.store.getState().navBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialog store={props.store}/>}/>
                    <Route path='/profile' render={() => <ProfileContentContainer store={props.store}/>}/>
                    <Route path='/news' component={OutPutNews}/>
                    <Route path='/friends' component={OutPutFriends}/>
                    <Route path='/musik' component={OutPutMusik}/>
                    <Route path='/findeUsers' render={() => <OutPutPage store={props.store}/>}/>
                    <Route path='/settings' component={OutPutSettings}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;