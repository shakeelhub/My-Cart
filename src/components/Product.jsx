import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = ({ product }) => {
  const { dispatch } = useContext(CartContext);

  const addToCart = () => {
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
  };

  return (
    <div className="card" style={{ width: '250px', margin: '10px' }}>
      <img src={product.thumbnail} className="card-img-top" alt={product.title} style={{ height: '250px', objectFit: 'cover' }} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">Price: ${product.price}</p>
        <button onClick={addToCart} className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
};

export default Product;
