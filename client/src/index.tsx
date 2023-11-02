import React from "react";
import { ConfigProvider, theme } from "antd";
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
    element: (
      <div>
        <Link to={Paths.home}>Home &nbsp;</Link>
        <Link to={Paths.login}>Login &nbsp;</Link>
        <Link to={Paths.register}>Register</Link>
        <h1>Employees</h1>
      </div>
    ),
  },
  {
    path: Paths.login,
    element: (
      <div>
        <Link to={Paths.home}>Home &nbsp;</Link>
        <Link to={Paths.login}>Login &nbsp;</Link>
        <Link to={Paths.register}>Register</Link>
        <Login />
      </div>
    ),
  },
  {
    path: Paths.register,
    element: (
      <div>
        <Link to={Paths.home}>Home &nbsp;</Link>
        <Link to={Paths.login}>Login &nbsp;</Link>
        <Link to={Paths.register}>Register</Link>
        <Register />
      </div>
    ),
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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
