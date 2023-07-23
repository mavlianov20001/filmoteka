import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "../client/components/navbar";
import Footer from "../client/components/Footer";

const HomePage = lazy(() => import("../client/Pages/HomePage"));
const SinglePage = lazy(() => import("../client/Pages/SingleMoviePage"));
const MoviePage = lazy(() => import("../client/Pages/MoviePage"));

export default function MainRoutes() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviePage />} />
          <Route path="/movies/:id/*" element={<SinglePage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}
