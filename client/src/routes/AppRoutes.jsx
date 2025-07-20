import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import { Home, About, Trending, Popular, Login, Register } from "../components";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/login", element: <Login /> },
      {
        element: <ProtectedRoute />,
        children: [
          { path: "/", element: <Home /> },
          { path: "/register", element: <Register /> },
          { path: "/about", element: <About /> },
          { path: "/trending", element: <Trending /> },
          { path: "/popular", element: <Popular /> },
        ],
      },
    ],
  },
]);