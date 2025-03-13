import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


import AdminLogin from './Components/Adminlogin';


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<AdminLogin/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
