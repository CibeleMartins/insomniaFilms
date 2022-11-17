import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "../pages/Home";
import Load from "../pages/Load";

const RoutesApp = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setInterval(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/" element={isLoading ? <Load /> : <Home />} />
      </Routes>
    </>
  );
};

export default RoutesApp;
