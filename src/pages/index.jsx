import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import App from '../App'
import AllProducts from './all-products'
import Clothes from './clothes'
import Tech from './tech'
import Header from '../components/ui/Header'
import Product from './product'

class AppRoutes extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<App />} />
          <Route path='/all' element={<AllProducts />} />
          <Route path='/clothes' element={<Clothes />} />
          <Route path='/tech' element={<Tech />} />
          <Route path='/products/:id' element={<Product />} />
        </Routes>
      </Router>
    )
  }
}

export default AppRoutes