import React from "react";
import { App, ConfigProvider, theme } from "antd";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { Link, RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./app/store";
import { Paths } from "./path";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { Login } from "./pages/login";
import { Register } from "./pages/register";

const router = createBrowserRouter([
  {
    path: Paths.home,
    element: <Login />,
  },
  {
    path: Paths.login,
    element: <Login />,
  },
  {
    path: Paths.register,
    element: <Register />,
  },
]);

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider theme={{ algorithm: theme.darkAlgorithm }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
