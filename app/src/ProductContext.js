// Create a new file, e.g., ProductContext.js
import React, { createContext, useContext, useReducer } from 'react';

const ProductContext = createContext();

const initialState = {
  productList: [...ProductList], // Assuming ProductList is your initial data
};

const productReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        ...state,
        productList: [...state.productList, action.payload],
      };
    default:
      return state;
  }
};

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);

  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

export { ProductProvider, useProductContext };
