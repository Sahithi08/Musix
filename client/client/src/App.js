import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import SongDetailsPage from "./components/SongDetailsPage";
import Landing from "./components/Landing";
import Songs from "./components/Songs";

const App = () => {
  return (
    <Router>
      <div className="app">
        {}
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/song-details" element={<SongDetailsPage />} />
          <Route path="/songs" element={<Songs />} />
          
        </Routes>
      </div>
    </Router>
  );
};

export default App;
