import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AllProducts from './all-products'
import Clothes from './clothes'
import Tech from './tech'
import Header from '../components/ui/Header'
import Product from './product'
import Cart from './cart'

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route index path='/' element={<AllProducts />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path='/tech' element={<Tech />} />
          <Route path='/products/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </Router>
    )
  }
}

export default AppRoutes