import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Collection from './pages/Collection';
import About from './pages/About';
import Contact from './pages/Contact';
import Product from './pages/Product';
import Cart from './pages/Cart';
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Orders from './pages/Orders.jsx'; // Renamed from "Oders"
import Navbar from './components/Navbar';

const App = () => {
  return (
    <div className="sm:px-[5vw] px-4 md:px-[7vw] lg:px-[9vw]">
      <Navbar />
      <Routes>
        {/* Default route to Home */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/placeorder" element={<PlaceOrder />} /> {/* Fixed typo */}
        <Route path="/orders" element={<Orders />} /> {/* Fixed typo */}
      </Routes>
    </div>
  );
};

export default App;
