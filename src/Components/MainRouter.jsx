import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Dashboard from "../Pages/Dashboard";
import { useContext } from "react";
import { DataContext } from "../DataProcessing/DataProcessing";
import ProjectRequest from "../Pages/ProjectRequest";

export default function MainRoute() {
  const { isUserLoggedIn } = useContext(DataContext)
  console.log(isUserLoggedIn);
  return (
    <Routes>
      <Route path="/" element={isUserLoggedIn ? <Dashboard /> : <Login />} />
      <Route path="project_request" element={isUserLoggedIn ? <ProjectRequest /> : <Login />} />
    </Routes>
  );
}