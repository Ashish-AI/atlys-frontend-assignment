import React from "react";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Signup from "./pages/Signup";

function App() {
  return (
    <div className=" bg-dark flex items-center justify-center min-h-screen ">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
      <Home />
    </div>
  );
}

export default App;
