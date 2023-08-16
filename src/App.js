import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import './App.css';
import Header from './Header';
import Checkout from './Checkout';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Login from './Login';
import Signup from './Signup';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/checkout" element={<Checkout />}/>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;

