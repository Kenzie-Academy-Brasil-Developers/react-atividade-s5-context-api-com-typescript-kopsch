import React from 'react'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Providers from './providers'

const App = () => {
  return (
    <Providers>
      <ProductList/>
      <Cart/>
    </Providers>
  )
}

export default App

