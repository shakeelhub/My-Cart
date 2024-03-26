import React from 'react';

const CartItem = ({ item, increaseQuantity, decreaseQuantity }) => {
  const handleIncrease = () => {
    increaseQuantity(item.id);
  };

  const handleDecrease = () => {
    decreaseQuantity(item.id);
  };

  return (
    <div className="card mb-3">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.thumbnail} className="img-fluid rounded-start" alt={item.title} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">Price: ${item.price}</p>
            <p className="card-text">Quantity: {item.quantity}</p>
            <button onClick={handleIncrease} className="btn btn-primary">+</button>
            <button onClick={handleDecrease} className="btn btn-primary">-</button>
            <p className="card-text">Total: ${item.price * item.quantity}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
