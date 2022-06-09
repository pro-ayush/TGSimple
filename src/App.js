import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrolltoTop";

import "./App.css";
import Home from "./pages/Home";
import Project from "./pages/project";

import Navbar from "./comp/Navbar/Navbar.jsx";
import Footer from "./comp/Footer/Footer.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Project />} />
        </Routes>
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default App;
