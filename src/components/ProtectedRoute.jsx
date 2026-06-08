import { Navigate } from "react-router-dom";
import { useUser } from "../context/AuthContext";

export default function ProtectedRoute({ children }) {
  const { isUser } = useUser();

  if (!isUser) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
