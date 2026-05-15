import { Route, Routes } from "react-router-dom"; // Router აქ არ გჭირდება, ის ჩვეულებრივ index.js-შია
import Leyout from "../leyout/Leyout"; 
import Home from "../pages/Home";
import Collections from "../pages/Collections";
import InspirationPage from "../pages/InspirationPage";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails"; // აუცილებლად დაამატე ეს იმპორტი

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Leyout />}>
      
        <Route index element={<Home />} /> 

        
        <Route path="product/:id" element={<ProductDetails />} />
        
      
        <Route path="collections" element={<Collections />} />
        <Route path="inspiration" element={<InspirationPage />} />
        <Route path="About" element={<About />} />
      </Route>
    </Routes>
  );
}

export default MyRoutes;