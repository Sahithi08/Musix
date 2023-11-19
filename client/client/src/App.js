import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import SongDetailsPage from "./components/SongDetailsPage";

const App = () => {
  return (
    <Router>
      <div className="app">
        {/* Your components and routes go here */}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/song-details" element={<SongDetailsPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
