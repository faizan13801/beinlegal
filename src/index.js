import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './components/LoginPage/login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

import './index.css';
import App from './App';

Kommunicate.init("f66f4ae58f28fec9e7bc3c44c6506d57" ,{"popupWidget":true,"automaticChatOpenOnNavigation":true})

ReactDOM.render(
       <App/>
    , document.getElementById('root'));

//ReactDOM.render(<App />, document.getElementById('root'));

