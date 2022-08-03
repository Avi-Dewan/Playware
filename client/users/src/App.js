
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import Admin from './components/pages/Admin';
import Game from './components/pages/Game';
import Home from './components/pages/Home';
import Login from './components/pages/Login';
import NavBar from './components/pages/NavBar';
import Register from './components/pages/Register';

import './App.css';

function App() {
   return (

      <BrowserRouter>
         <NavBar />
         <Routes>

            <Route exact path="/" element={<Home />} />
            <Route exact path="/Login" element={<Login />} />
            <Route exact path="/Register" element={<Register />} />
            <Route exact path="/Game" element={<Game />} />
            <Route exact path="/Admin" element={<Admin />} />


         </Routes>


      </BrowserRouter>











   );
}

export default App;