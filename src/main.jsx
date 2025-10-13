import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import routes from "./core/routes.jsx";

import "./../public/css/index.css";
import "./../public/css/fonts.css";
import Modal from "./components/common/modal/index.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Modal />
    <RouterProvider router={routes} />
  </StrictMode>
);
