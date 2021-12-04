import React from "react";
import './App.css';
import Nav from "./Components/NavBarModules/navigation.jsx";
import Dialog from "./Dialog/components/OutPut/OutPutDialogs";
import {BrowserRouter, Route} from "react-router-dom";
import OutPutNews from "./News/components/OutPut/OutPutNews";
import OutPutMusik from "./Musik/components/OutPut/OutPutMusik";
import OutPutSettings from "./Settings/components/OutPut/OutPutSettings";
import OutPutFriends from './Friends/components/OutPutFriends/OutPutFriends';
import OutPutPage from "./FindeUsersPage/components/OutPutPage";
import MainOutPutLogin from './Login/components/MainOutPutLogin/MainOutPutLogin'
import ProfileContentContainer from "./userFront/allProfile/ProfileContentContainer";
import HeaderCC from "./Components/HeaderModules/HeaderContainer/HeaderContainer";



function App (props) {
    return (
        <BrowserRouter>
            <div className="MyApp">
                <HeaderCC />
                <Nav navSate={props.store.getState().navBar}/>
                <div className='app-wrapper-content'>
                    <Route path='/dialogs' render={() => <Dialog />}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContentContainer />}/>
                    <Route path='/news' component={OutPutNews}/>
                    <Route path='/friends' component={OutPutFriends}/>
                    <Route path='/musik' component={OutPutMusik}/>
                    <Route path='/findUsers' component={OutPutPage}/>
                    <Route path='/settings' component={OutPutSettings}/>
                    <Route path='/login' render={() => <MainOutPutLogin />}/>
                </div>
            </div>
        </BrowserRouter>
    );
};


export default App;