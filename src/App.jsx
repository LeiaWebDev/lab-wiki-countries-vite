import "./App.css";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  
  

  return (
    <div className="App">
      <Navbar/>

      <Routes>
        <Route path="/" element = {<HomePage />}/>
        <Route path="/countries/:alpha3Code" element = {<CountryDetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
