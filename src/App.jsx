import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { EachProduct } from "./pages/eachProduct";
import { ProductPage } from "./pages/products";
import { Home } from "./pages/home/Home";

function App() {
  return (
   <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/products/1" element={<EachProduct/>}/>
    </Routes>
   </>
  );
}

export default App;
