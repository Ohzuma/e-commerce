import "./index.css";
// import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer";
import Index from "./pages/HomePage/Index";
import Cart from "./pages/cart/Cart";
import Detailed from "./pages/HomePage/Detailed";
import { Routes, Route } from "react-router-dom";
import Shoes from "./pages/Shoes";
import Computer from "./pages/Computer";
import Fashion from "./pages/Fashion";
import Jewelries from "./pages/jewelries";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=" overflow-x-hidden relative">
      {/* <LoadingContext> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/detail/:id" element={<Detailed />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/computer" element={<Computer />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/jewelries" element={<Jewelries />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="*"
          element={
            <div className="mt-[15rem] flex flex-col justify-center items-center">
              <p className="text-2xl font-bold">Page Not Found</p>
              <p className="text-md">
                Go back to{" "}
                <a href={"/"} className="text-xl text-blue-700 font-bold">
                  home page
                </a>
              </p>
            </div>
          }
        />
      </Routes>
      <Footer />
      {/* </LoadingContext> */}
    </div>
  );
}

export default App;
