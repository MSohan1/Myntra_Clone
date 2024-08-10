import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Bag from "./routes/Bag";
import MainSection from "./routes/MainSection";
import { Provider } from "react-redux";
import MyntraStore from "./store/MyntraStore";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MainSection />,
      },
      {
        path: "/Bag",
        element: <Bag />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <Provider store={MyntraStore}>
    <RouterProvider router={router} />
  </Provider>
  </React.StrictMode>
);
