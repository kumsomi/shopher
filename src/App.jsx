import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/navbar/Navbar";
import { EachProduct } from "./pages/eachProduct";
import { ProductPage } from "./pages/products";

function App() {
  return (
   <>
    <h1>
    Hello ShopHer 
    </h1>
    <p>for - watch, jwellery, handbag --- categories - brands</p>
    <Navbar/>
    <Routes>
      <Route path="/products" element={<ProductPage/>}/>
      <Route path="/products/1" element={<EachProduct/>}/>
    </Routes>
   </>
  );
}

export default App;
