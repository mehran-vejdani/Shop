import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
//components
import NavbarComponent from "./components/navbar/NavbarComponent";
import Store from "./components/sharedComponents/productComponent/Store";
import ProductDetails from "./components/sharedComponents/productDetails/ProductDetails";
//end component
//context
import ProductContextProvider from "./components/context/ProductContextProvider";
import CartContextProvider from "./components/context/CartContextProvider";
function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <NavbarComponent />
        <Routes>
          <Route path="/products" element={<Store />} />
          <Route path="*" element={<Navigate to="/products" />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
