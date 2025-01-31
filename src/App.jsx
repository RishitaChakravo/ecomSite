
import React from 'react'
import Header from "./header.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./Home.jsx";
import Item from "./item.jsx";
import YourCart from "./yourCart.jsx";
import { CartProvider } from './Context.jsx';

function App() {

  return (
      <CartProvider>
        <Router>
          <Header/>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route path="/item" element={<Item/>}/>
            <Route path="/yourCart" element={<YourCart/> }/>
          </Routes>
        </Router>
      </CartProvider>
  );
}

export default App
