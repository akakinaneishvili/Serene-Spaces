import { Route, Routes } from "react-router-dom";
import Leyout from "../leyout/Leyout";
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import Shopping from "../Pages/Shopping";
import About from "../Pages/About";
import ProductDetails from "../Pages/ProductDetails";
import Registration from "./Registration";
import LogIn from "./LogIn";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Leyout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="collections" element={<Collections />} />
        <Route path="Shopping" element={<Shopping />} />
        <Route path="About" element={<About />} />
        <Route path="Registration" element={<Registration />} />
        <Route path="LogIn" element={<LogIn />} />
      </Route>
    </Routes>
  );
}

export default MyRoutes;
