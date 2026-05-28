import { Route, Routes } from "react-router-dom";
import Leyout from "../leyout/Leyout";
import Home from "../pages/Home";
import Collections from "../Pages/Collections";
import Shopping from "../pages/Shopping";
import About from "../pages/About";
import ProductDetails from "../pages/ProductDetails";
import Registration from "../components/Registration";
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
