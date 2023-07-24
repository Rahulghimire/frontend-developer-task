import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Breeds from "./pages/Breeds";
import Gallery from "./pages/Gallery";
import Services from "./pages/Services";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Router>
        <TopBar />
        <Navigation />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/gallery" element={<Gallery />} />

          <Route
            path="*"
            element={<h1 className="text-center">Page not Found!!</h1>}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
