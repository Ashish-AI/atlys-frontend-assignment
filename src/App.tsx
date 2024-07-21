import React from "react";
import "./App.css";

import Login from "./pages/Login";
import SignUp from "./pages/Signup";
import Home from "./pages/Home";

function App() {
  return (
    <div className=" bg-dark flex items-center justify-center min-h-screen ">
      {/* <Login /> */}
      {/* <SignUp /> */}
      <Home />
    </div>
  );
}

export default App;
