
import React from 'react';
//import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/jquery/dist/jquery.min.js';
import Admin from './components/pages/Admin';
import Admin_Login from './components/pages/Admin_Login';
import Admin_Options from './components/pages/Admin_Options';
import Buy from './components/pages/Buy';
import Developer from './components/pages/Developer';
import Developer_Login from './components/pages/Developer_Login';
import Developer_Register from './components/pages/Developer_Register';
import Game from './components/pages/Game';
import Home from './components/pages/Home';
import Landing from './components/pages/Landing';
import NavBar from './components/pages/NavBar';
import Publisher from './components/pages/Publisher';
import Publisher_Login from './components/pages/Publisher_Login';
import Publisher_Register from './components/pages/Publisher_Register';
import Types from './components/pages/Types';
import User_Login from './components/pages/User_Login';
import User_Register from './components/pages/User_Register';

import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
   return (

      <BrowserRouter>
         <NavBar />
         <Routes>
          
            <Route exact path="/" element={<Landing/>} />
            <Route exact path="/User_Login" element={<User_Login/>} />
            <Route exact path="/User_Register" element={<User_Register />} />
            <Route exact path="/Admin_Options" element={<Admin_Options/>} />
            <Route exact path="/Admin_Login" element={<Admin_Login />} />
            <Route exact path="/Admin" element={<Admin/>} />
            <Route exact path="/Developer_Login" element={<Developer_Login />} />
            <Route exact path="/Developer_Register" element={<Developer_Register />} />
            <Route exact path="/Developer" element={<Developer/>} />
            <Route exact path="/Publisher_Login" element={<Publisher_Login/>} />
            <Route exact path="/Publisher_Register" element={<Publisher_Register />} />
            <Route exact path="/Publisher" element={<Publisher />} />
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/Types" element={<Types />} />
            <Route exact path="/Game" element={<Game />} />
            <Route exact path="/Buy" element={<Buy />} />


         </Routes>


      </BrowserRouter>











   );
}

export default App;
