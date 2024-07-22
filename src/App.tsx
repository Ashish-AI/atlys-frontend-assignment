import React from "react";
import "./App.css";
import Login from "./pages/LoginWrapper";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ModalProvider } from "./Contexts/ModalContext";

function App() {
  return (
    <ModalProvider>
      <Router>
        <div className="bg-dark flex items-center justify-center min-h-screen">
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </div>
      </Router>
    </ModalProvider>
  );
}

export default App;
