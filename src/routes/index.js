// components of routing and hooks
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// pages
import Home from "../pages/Home";
import Load from "../pages/Load";
import MovieLocating from "../pages/MovieLocating";

const RoutesApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/home" element={isLoading ? <Load /> : <Home />} />
        <Route exact path="/locarFilme" element={<MovieLocating />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
