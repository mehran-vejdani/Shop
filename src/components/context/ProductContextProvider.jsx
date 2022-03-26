import React, { useEffect, useState, createContext } from "react";
//get api
import { getProducts } from "../services/api";
//create context
export const productContext = createContext();
const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  return (
    <productContext.Provider value={products}>
      {children}
    </productContext.Provider>
  );
};

export default ProductContextProvider;
