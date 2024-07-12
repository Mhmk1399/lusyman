import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import Home from './pages/Home';
import About from './pages/About';
import Store from './pages/Store';
import Blogpage from './pages/BlogPage';
import Namaiandegi from './pages/Namaiandegi';
import Takmahsol from './pages/Takmahsol';
import VipClub from './pages/VipClub';
import OrderForm from "./components/OrderForm";
import SignUp from './pages/SignUp';
import LoginForm from './pages/Login';
import Order from './pages/Order';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
                <Route index element={<Home />}/>
                <Route path='about' element={<About />}/>
                <Route path='Blogpage' element={<Blogpage />}/>
                <Route path='Namaiandegi' element={<Namaiandegi />}/>
                <Route path='VipClub' element={<VipClub/>}/>
                <Route path='store' element={<Store />}/>
                
                <Route path='SignUp' element={<SignUp />}/>
                <Route path='Takmahsol/:id' element={<Takmahsol />}/>
                <Route path='login' element={<LoginForm />}/>
                <Route path="/order" element={<OrderForm />} />
                
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
