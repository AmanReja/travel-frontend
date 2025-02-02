import React from "react";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import { Outlet } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { toast, Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Toaster></Toaster>
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
        <Login></Login>
        <Signup></Signup>
      </Outlet>

      <Footer></Footer>
    </>
  );
}

export default App;
