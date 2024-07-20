import React, { useState } from "react";
import "./App.css";
import Input from "./components/Input";
import Button from "./components/Button";
import Login from "./pages/Login";

function App() {
  return (
    <div className=" bg-dark flex items-center justify-center min-h-screen ">
      <Login />
    </div>
  );
}

export default App;
