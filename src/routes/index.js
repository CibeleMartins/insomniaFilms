import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import Load from "../pages/Load";
import MovieLocating from '../pages/MovieLocating';

const RoutesApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={isLoading ? <Load /> : <Home />} />
        <Route exact path="/locarFilme" element={<MovieLocating/>} />
      </Routes>
    </>
  );
};

export default RoutesApp;
