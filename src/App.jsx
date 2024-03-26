import React from 'react';
import { CartProvider } from './components/CartContext';
import ProductList from './components/ProductList';
import CartPage from './components/CartPage';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <CartProvider>
      <div >
        <h1 className="text-center fw-bold border mt-3 mb-3" style={{ color: 'black', backgroundColor: '#f5f5dc' }}> Cart App</h1>
        <ProductList />
        <CartPage />
      </div>
    </CartProvider>
  );
}

export default App;
