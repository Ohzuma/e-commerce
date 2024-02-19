import "./index.css";
// import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer";
import Index from "./pages/HomePage/Index";
import Cart from "./pages/HomePage/Cart";
import Detailed from "./pages/HomePage/Detailed";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className=" overflow-x-hidden">
      {/* <LoadingContext> */}
      <Navbar />

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detailed />} />
      </Routes>
      <Footer />
      {/* </LoadingContext> */}
    </div>
  );
}

export default App;
