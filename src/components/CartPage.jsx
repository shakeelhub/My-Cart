import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const CartPage = () => {
    const { state, dispatch } = useContext(CartContext);

    const handleIncreaseQuantity = (item) => {
        dispatch({ type: 'INCREASE_QUANTITY', payload: item });
    };

    const handleDecreaseQuantity = (item) => {
        if (item.quantity > 1) {
            dispatch({ type: 'DECREASE_QUANTITY', payload: item });
        } else {
            dispatch({ type: 'REMOVE_ITEM', payload: item });
        }
    };

    return (
        <div>
            <h2 className='text-center fw-bold border' style={{ color: 'black', backgroundColor: '#f5f5dc' }}>Cart Page</h2>
            <div>
                {state.items.map((item) => (
                    <div key={item.id} className="card mb-3">
                        <div className="card-body">
                            <h3 className="card-title">{item.title}</h3>
                            <p className="card-text">Quantity: {item.quantity}</p>
                            <p className="card-text">Price: ${item.price}</p>
                            <button onClick={() => handleIncreaseQuantity(item)} className="btn btn-primary">+</button>
                            <button onClick={() => handleDecreaseQuantity(item)} style={{ "marginLeft": "10px" }} className="btn btn-primary">-</button>
                        </div>
                    </div>
                ))}
                <div className="border border-dark border-bottom mb-4">
                    <h3 className="text-center mt-5">
                        <p className="fw-bold text-center">Total Quantity:</p> {state.totalQuantity}
                    </h3>
                    <h3 className="text-center mt-4">
                        <p className="fw-bold text-center">Total Amount: </p> ${state.totalAmount.toFixed(2)}
                    </h3>
                    <p className="text-center">Free Shipping</p>
                </div>
            </div>
        </div>
    );
};

export default CartPage;
