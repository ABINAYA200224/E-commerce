import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Header";
// import { LoaderFunction } from 'react-router-dom'
import Home from "./pages/Home";
import Card from "./components/Card";
import Jewelery from "./pages/Jewelery";
import Mensclothing from "./pages/MensClothing";
import Electronics from "./pages/Electronics";
import Womensclothing from "./pages/WomensClothing";
import CardDetails from "./components/Card details";

function App() {
  return (
    <>
      <Router>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jewelery" element={<Jewelery />} />
          <Route path="/mensclothing" element={<Mensclothing />} />
          <Route path="/electronics" element={<Electronics />} />
          <Route path="/womensclothing" element={<Womensclothing />} />\
          <Route path="/product/:id" element={<CardDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
