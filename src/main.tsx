import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Provider from "./providers/Provider.tsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./router.tsx";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import 'remixicon/fonts/remixicon.css'

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" />
    </Provider>
  </React.StrictMode>
);

