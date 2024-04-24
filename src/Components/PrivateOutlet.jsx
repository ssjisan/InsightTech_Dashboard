import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";

export default function PrivateOutlet() {
    const { isUserLoggedIn } = useContext(DataContext)

  return isUserLoggedIn ? <Outlet /> : <Navigate to="/login" />;
}