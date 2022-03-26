import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
//components
import NavbarComponent from "./components/navbar/NavbarComponent";
import Product from "./components/sharedComponents/productComponent/Product";
//end component
//context
import ProductContextProvider from "./components/context/ProductContextProvider";
function App() {
  return (
    <ProductContextProvider>
      <NavbarComponent />
      <Product />
    </ProductContextProvider>
  );
}

export default App;
