import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import CustomerOrder from './pages/CustomerOrder';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={ <Navigate to="/login" replace /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
        <Route path="/customer/orders" element={ <CustomerOrder /> } />
      </Routes>
    </main>
  );
}

export default App;
