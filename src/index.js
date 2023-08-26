import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './components/LoginPage/login';
import Signup from './components/LoginPage/register';

import './index.css';
import App from './App';


//Kommunicate.init("f66f4ae58f28fec9e7bc3c44c6506d57" ,{"popupWidget":true,"automaticChatOpenOnNavigation":true})

// ReactDOM.render(
//         <BrowserRouter>
//             <Routes>
//                 <Route path='/login' element={<Signin/>}></Route>
//                 <Route path='/' element={<App />}></Route> 
//                 <Route path='/register' element={<Signup/>} ></Route>
//             </Routes>
//         </BrowserRouter>
//     , document.getElementById('root'));

ReactDOM.render(<App />, document.getElementById('root'));

