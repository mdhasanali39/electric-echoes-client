import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
import AuthProvider from "./Contexts/AuthProvider";
import ThemeManager from "./Contexts/ThemeManager";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeManager>
      <RouterProvider router={router}></RouterProvider>
      </ThemeManager>
    </AuthProvider>
  </React.StrictMode>
);
