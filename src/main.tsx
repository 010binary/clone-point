import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Provider from "./providers/Provider.tsx";
import { RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { router } from "./router.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "remixicon/fonts/remixicon.css";
const client = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <Provider>
        <RouterProvider router={router} />
        <ToastContainer position="top-right" />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
