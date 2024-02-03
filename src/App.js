import React from "react";
import './app.css'
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Foods } from "./components/Foods";
import { Footer } from "./components/Footer";
import Drinks from "./components/Drinks";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import OnlyFoods from "./OnlyFoods";
import Home from "./Home";
import OnlyDrinks from "./OnlyDrinks";

function App() {
  return (
    <div >
      <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home/>}/>
        <Route path="/onlyfoods" element={<OnlyFoods/>}/>
        <Route path="/onlydrinks" element={<OnlyDrinks/>}/>
      </Routes>
      </Router>
      

    </div>
  );
}

export default App;
