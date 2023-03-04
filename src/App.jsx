import React from 'react'
import Navbar from './Components/Navbar/Navbar'


import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import MainPage from './pages/mainpage/MainPage';
import Buycrypto from './pages/buycrypto/Buycrypto';
import Charity from './pages/charity/Charity';
import Azercell from './pages/azercell/Azercell';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/buycrypto" element={<Buycrypto />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/azercell" element={<Azercell />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App