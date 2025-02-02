import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  Route,
  Router,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import Home from "./Components/Home.jsx";
import Login from "./Components/Login.jsx";
import Signup from "./Components/Signup.jsx";
import Footer from "./Components/Footer.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<App />}>
      <Route index path="/" element={<Home />} />
      <Route path="/login" element={<Login></Login>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/footer" element={<Footer />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
