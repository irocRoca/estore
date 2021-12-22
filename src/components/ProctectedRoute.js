import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { globalContext } from "../context/global";

const ProctectedRoute = ({ children }) => {
  const { user } = useContext(globalContext);
  return user ? children : <Navigate to="/" />;
};

export default ProctectedRoute;
