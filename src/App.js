import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <div className="Site-content">
        <Navbar />
        <div>
          <br />
          <br />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;

// Font awesome site
