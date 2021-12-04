import React from 'react';
import './index.css';
import store from './Redux/reduxStore';
import ReactDOM from "react-dom";
import App from "./App.jsx";
import {Provider} from "react-redux";

export const renderApp = () => {
    ReactDOM.render(
        <React.StrictMode>
            <Provider store={store}>
                <App store={store} state={store.getState()}/>
            </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

renderApp();

