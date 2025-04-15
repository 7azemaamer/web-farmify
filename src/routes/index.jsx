import { createBrowserRouter } from "react-router-dom";

// Pages
import Dashboard from "../pages/Dashboard/Dashboard";
import Signin from "../pages/Auth/Signin/Signin";
import Signup from "../pages/Auth/Signup/Signup";
import Profile from "../pages/Auth/Profile/Profile";
import Users from "../pages/Users/Users";
import Warehouses from "../pages/Warehouses/Warehouses";
import Orders from "../pages/Orders/Orders";
import Products from "../pages/Products/Products";

// Layout
import RootLayout from "../components/layouts/RootLayout";
import ProtectedRoute from "../components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "users",
        element: (
          <ProtectedRoute>
            <Users />
          </ProtectedRoute>
        ),
      },
      {
        path: "warehouses",
        element: (
          <ProtectedRoute>
            <Warehouses />
          </ProtectedRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute>
            <Orders />
          </ProtectedRoute>
        ),
      },
      {
        path: "products",
        element: (
          <ProtectedRoute>
            <Products />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        ),
      },
    ],
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

export default router;
