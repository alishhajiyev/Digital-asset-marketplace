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
import User from './pages/user/User';
import Footer from './Components/footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/buycrypto" element={<Buycrypto />} />
        <Route path="/charity" element={<Charity />} />
        <Route path="/azercell" element={<Azercell />} />
        <Route path="/user" element={<User />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App