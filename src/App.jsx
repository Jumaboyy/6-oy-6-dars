import { createBrowserRouter, RouterProvider } from "react-router-dom";


import MainLayout from "./layout/MainLayout";


import Home from "./pages/Home";
import Contact from "./pages/Context";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;