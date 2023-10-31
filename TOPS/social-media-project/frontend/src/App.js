import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Container/Home";
import Login from "./Components/Login";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
