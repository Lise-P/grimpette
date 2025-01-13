import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./CSS/index.css";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.tsx";
import Evenements from "./pages/Evenements.tsx";
import Articles from "./pages/Articles.tsx";
import GrimpeAvecMoi from "./pages/GrimpeAvecMoi.tsx";
import Contact from "./pages/Contact.tsx";

//ne pas oublier npm install react-router-dom

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/grimpeavecmoi",
        element: <GrimpeAvecMoi />,
      },
      {
        path: "/evenements",
        element: <Evenements />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

// Find the root element in the HTML document
const rootElement = document.getElementById("root");
if (rootElement == null) {
  throw new Error(`Your HTML Document should contain a <div id="root"></div>`);
}

// Render the app inside the root element
createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
