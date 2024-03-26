import React, { createContext, useReducer } from 'react';

// Initial state of the cart
const initialState = {
  items: [], 
  totalQuantity: 0,
  totalAmount: 0,
};



export const CartContext = createContext(initialState);

const cartReducer = (state, action) => {
  switch (action.type) {

    case 'ADD_ITEM':
  const existingItem = state.items.find(item => item.id === action.payload.id);
  if (existingItem) {
    const updatedItems = state.items.map(item =>
      item.id === existingItem.id ? { ...item, quantity: item.quantity + 1 } : item
    );
    return {
      ...state,
      items: updatedItems,
      totalQuantity: state.totalQuantity + 1,
      totalAmount: state.totalAmount + action.payload.price,
    };
  } else {
    return {
      ...state,
      items: [...state.items, { ...action.payload, quantity: 1 }],
      totalQuantity: state.totalQuantity + 1,
      totalAmount: state.totalAmount + action.payload.price,
    };
  }


    case 'REMOVE_ITEM':
        const updatedItems = state.items.filter(item => item.id !== action.payload.id);
        const removedItem = state.items.find(item => item.id === action.payload.id);
        return {
          ...state,
          items: updatedItems,
          totalQuantity: state.totalQuantity - removedItem.quantity,
          totalAmount: state.totalAmount - (removedItem.price * removedItem.quantity)
        };


    case 'INCREASE_QUANTITY':
        return {
            ...state,
            items: state.items.map(item =>
              item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
            totalQuantity: state.totalQuantity + 1,
            totalAmount: state.totalAmount + action.payload.price
          };
     

    case 'DECREASE_QUANTITY':
        const decreasedItem = state.items.find(item => item.id === action.payload.id);
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
          ),
          totalQuantity: state.totalQuantity - 1,
          totalAmount: state.totalAmount - decreasedItem.price
        };
    default:
      return state;
  }
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
