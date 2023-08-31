import "./App.css";
import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Dance from "./components/Dance";
import Karate from "./components/Karate";
import Swimming from "./components/Swimming";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Progress from "./components/Progress";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dance" element={<Dance />} />
        <Route path="/swimming" element={<Swimming />} />
        <Route path="/karate" element={<Karate />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
