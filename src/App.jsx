import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
//import Footer from "./components/Footer/Footer"
import Home from "./pages/Home/Home";
import About from "./pages/About/AboutTwo";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import MovieApp from "./pages/demos/movieApp/movieApp";
import CryptoInfoApp from "./pages/demos/cryptoInfoApp/CryptoInfoApp";
import DemoPro1 from "./pages/demos/DemoPro1/DemoPro1";
import DemoPro2 from "./pages/demos/DemoPro2/DemoPro2";
import DemoPro3 from "./pages/demos/DemoPro3/DemoPro3";
import DemoPro4 from "./pages/demos/DemoPro4/DemoPro4";
import DemoPro5 from "./pages/demos/DemoPro5/DemoPro5";
import DemoPro6 from "./pages/demos/DemoPro6/DemoPro6";
import "./components/FontawesomeIcons";
import WiseUp from "./pages/demos/wiseUp/WiseUp";
import NotebookApp from "./pages/demos/notebookApp/NotebookApp";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Projects" element={<Projects />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/movieApp" element={<MovieApp />} />
        <Route exact path="/notebookApp" element={<NotebookApp />} />
        <Route exact path="/cryptoInfoApp" element={<CryptoInfoApp />} />
        <Route exact path="/wiseUp" element={<WiseUp />} />
        <Route exact path="/DemoPro1" element={<DemoPro1 />} />
        <Route exact path="/DemoPro2" element={<DemoPro2 />} />
        <Route exact path="/DemoPro3" element={<DemoPro3 />} />
        <Route exact path="/DemoPro4" element={<DemoPro4 />} />
        <Route exact path="/DemoPro5" element={<DemoPro5 />} />
        <Route exact path="/DemoPro6" element={<DemoPro6 />} />
      </Routes>
      {/* <Footer/> */}
    </>
  );
}

export default App;
