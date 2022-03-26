import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
//components
import NavbarComponent from "./components/navbar/NavbarComponent";
import Product from "./components/sharedComponents/productComponent/Product";
//end component
function App() {
  return (
    <div>
      <NavbarComponent />
      <Product />
    </div>
  );
}

export default App;
