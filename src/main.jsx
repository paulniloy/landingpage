import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Home";
import Container from "./components/Container";
import About from "./components/About";
import Contact from "./components/Contact";
import Blog from "./components/Blog";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Container></Container>,
    children : [
      {
        path : "/",
        element : <Home></Home>
      },
      {
        path : "/about",
        element : <About></About>
      },
      
      {
        path : "/contact",
        element : <Contact></Contact>
      },
      
      {
        path : "/blog",
        element : <Blog></Blog>
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);