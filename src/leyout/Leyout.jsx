import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

import ScrollToTopButton from "../components/ScrollToTopButton"; 

function Leyout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
      <ScrollToTopButton />

      <Footer />
    </>
  );
}

export default Leyout;