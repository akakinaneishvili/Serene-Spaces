import { Route, Routes } from "react-router-dom";
import Leyout from "../leyout/Leyout";
import Home from "../Pages/Home";
import Collections from "../Pages/Collections";
import Shopping from "../Pages/Shopping";
import About from "../Pages/About";
import ProductDetails from "../Pages/ProductDetails";
import Registration from "./Registration";
import LogIn from "./LogIn";
import UserPage from "../Pages/Userpage";
import ProtectedRoute from "../components/ProtectedRoute";

function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Leyout />}>
        <Route index element={<Home />} />
        <Route path="product/:id" element={<ProductDetails />} />
        <Route path="collections" element={<Collections />} />
        <Route path="shopping" element={<Shopping />} />
        <Route path="about" element={<About />} />
        <Route path="registration" element={<Registration />} />
        <Route path="login" element={<LogIn />} />

        <Route
          path="userpage"
          element={
            <ProtectedRoute>
              <UserPage />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default MyRoutes;
