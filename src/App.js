import "./index.css";
// import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer";
import Index from "./pages/HomePage/Index";
import Cart from "./pages/cart/Cart";
import Detailed from "./pages/HomePage/Detailed";
import { Routes, Route } from "react-router-dom";
import Shoes from "./pages/Shoes";
function App() {
  return (
    <div className=" overflow-x-hidden">
      {/* <LoadingContext> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detailed />} />
        <Route path="/shoes" element={<Shoes />} />
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
