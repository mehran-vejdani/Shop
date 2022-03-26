import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
//components
import NavbarComponent from "./components/navbar/NavbarComponent";
import Store from "./components/sharedComponents/productComponent/Store";
//end component
//context
import ProductContextProvider from "./components/context/ProductContextProvider";
function App() {
  return (
    <ProductContextProvider>
      <NavbarComponent />
      <Routes>
        <Route path="/products" element={<Store />} />
        <Route path="*" element={<Navigate to="/products" />} />
      </Routes>
    </ProductContextProvider>
  );
}

export default App;
