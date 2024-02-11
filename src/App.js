import "./index.css";
import { Route, Routes } from "react-router-dom";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer";
import Index from "./pages/HomePage/Index";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      {/* <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/" element={<LastViewed />}/>
        <Route path="/" element={<TopSeller />}/>
        <Route path="/" element={<MusicLover />}/>
      </Routes> */}

      <Index />
      <Footer />
    </div>
  );
}

export default App;
