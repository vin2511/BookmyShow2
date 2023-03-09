import React, { useState } from 'react';
import { Routes, Route} from "react-router-dom";
import Home from './Pages/Login/Home';
import Dashboard from "./Pages/Dashboard";
import RegistrationModal from './Pages/Login/Register'

import Login from "./Pages/Login/Login.jsx";



import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  // const handleLogin = () => {
  //   setIsAuthenticated(true);
  // }

  // const handleLogout = () => {
  //   setIsAuthenticated(false);
  // }

  // const [currentForm, setCurrentForm] = useState('login');
  // const toggleForm = (formName) => {
  //   setCurrentForm(formName);
  // }

  return (
    <Routes>
              {/* <Route path="/home" element={<Dashboard/>}></Route> */}
              <Route path='/' element={<Login/>}></Route>
              <Route path='/register' element={<RegistrationModal/>}></Route>
              <Route path='/dashboard' element={<Dashboard/>}></Route>
              <Route path='/home' element={<Home/>}></Route>
    </Routes>
  );
}

export default App;
