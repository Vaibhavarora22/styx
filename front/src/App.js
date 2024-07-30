import { Routes, Route } from "react-router-dom";
import ProductList from "./pages/ProductList.js";
import Header from "./pages/Header.js";
import CartPage from "./pages/CartPage.js";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/page" element={<Header />} />
        <Route path="/cart" element={<CartPage />} />
        {/* <Route path="/page" element={<ProductList />} /> */}
      </Routes>
      
       

    </>
  );
}

export default App;
