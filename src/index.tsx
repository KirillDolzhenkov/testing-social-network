import React from 'react';
import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, messageForNewPost} from './redux/state'
import {BrowserRouter} from "react-router-dom";


export let rerenderEntireTree = () => {
    ReactDOM.render(
        <React.StrictMode>
            <BrowserRouter>
                <App
                    state={state}
                    addPost={addPost}
                    messageForNewPost={messageForNewPost}
                />
            </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderEntireTree();
subscribe(rerenderEntireTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
