import React from "react";
import { Route, Routes } from "react-router-dom";

import Movie from "./components/movieSpecs.js";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Movie />} />
      </Routes>
    </div>
  );
}

export default App;
