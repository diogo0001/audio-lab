import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Services from "./components/Services";
import Tutorials from "./components/Tutorials";
import Contact from "./components/Contact";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";

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
