import React from "react";
import "./App.css";
import { Route, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";
import Home from "./Pages/home/home";
import Character from "./Pages/character/character";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<Character />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
