import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ModalProvider } from "./Contexts/ModalContext";
import SignUpWrapper from "./pages/SignUpWrapper";
import LoginWrapper from "./pages/LoginWrapper";

function App() {
  return (
    <div className="bg-dark flex items-center justify-center min-h-screen">
      <Router>
        <ModalProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginWrapper />} />
            <Route path="/signup" element={<SignUpWrapper />} />
            <Route path="/home" element={<Home />} />
          </Routes>
        </ModalProvider>
      </Router>
    </div>
  );
}

export default App;
