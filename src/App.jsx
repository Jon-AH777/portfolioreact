import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./_components/Home/Home";

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
