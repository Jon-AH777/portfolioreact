import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./_components/Home/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    /*  children: [
      {
        path: "/navbar",
        element: <Navbar />,
      },
    ], */
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App;
