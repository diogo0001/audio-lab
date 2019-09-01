import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { Products, Services, Tutorials } from "./components/PaginationContent";

function App() {
  return (
    <div className="App">
      <div className="Site-content">
        <Navbar />
        <div>
          <Home />
          <Products />
          <Services />
          <Tutorials />
          <AboutUs />
          <Contact />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// Font awesome site icons
