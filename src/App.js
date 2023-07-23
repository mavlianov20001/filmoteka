import MainRoutes from "./MainRoutes/MainRoutes";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <MainRoutes />
      </BrowserRouter>
    </>
  );
}

export default App;
