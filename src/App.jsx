import React from 'react'
import { Route, Routes } from 'react-router-dom';
import AddToCart from './Pages/AddToCart';
import CouponPage from './Pages/CouponPage';
import HomePage from './Pages/HomePage';
import ProductPage from './Pages/ProductPage';


function App() {

  return (
    <div>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/coupons" element={<CouponPage/>}/>
          <Route path="/products" element={<ProductPage/>}/>
          {/* <Route path="/addtocart" element={<AddToCart/>}/> */}
        </Routes>
    </div>
  )
}

export default App
