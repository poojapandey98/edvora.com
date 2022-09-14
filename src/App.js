import React from "react";
import './App.css';
import Product from '../src/component/product';
import User from "../src/component/user";
import Order from "./component/order";
import { BrowserRouter as Router, Route, Routes, } from "react-router-dom";
function App() {
             return (
              <div>
              <Router>
                <Routes>
                
                <Route path ="/" element={<User/>} />
                <Route path="/product"element ={<Product/>} />
                <Route path="/order" element={<Order/>} />
                </Routes>
                
              </Router>

             </div>
      
        
    );

}
   
export default App;