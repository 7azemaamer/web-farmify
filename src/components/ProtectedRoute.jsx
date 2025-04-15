import { Navigate } from "react-router-dom";
// import { useAuth } from "../utils/auth";

export default function ProtectedRoute({ children }) {
  //   const { isAuthenticated } = useAuth();

  // if (!isAuthenticated) {
  //   return <Navigate to="/signin" replace />;
  // }

  return children;
}
