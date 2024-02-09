import "./index.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/HomePage/Home";
import Category from "./pages/Category";
import LastViewed from "./pages/LastViewed";
import TopSeller from "./pages/TopSeller";
import MusicLover from "./pages/MusicLover";

function App() {
  return (
    <div className=" overflow-x-hidden">
      <Navbar />
      <Home />
      <Category />
      <LastViewed />
      <TopSeller />
      <MusicLover />
    </div>
  );
}

export default App;
