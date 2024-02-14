import "./index.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer";
import Index from "./pages/HomePage/Index";
// import LoadingContext from "./component/Context";
function App() {
  return (
    <div className=" overflow-x-hidden">
      {/* <LoadingContext> */}
      <Navbar />
      <Index />
      <Footer />
      {/* </LoadingContext> */}
    </div>
  );
}

export default App;
