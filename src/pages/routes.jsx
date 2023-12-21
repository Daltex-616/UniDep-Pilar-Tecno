import { Navigate, useRoutes } from "react-router-dom";
import DashboardLayout from "./layout/DashboardLayout";
import NotFound from "./layout/NotFound";
import Deportes from "./deportes/Deportes";
import Dashboard from "./home/Dashboard";


import React from "react";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Dashboard />,
      children: [
        { path: "", element: <Dashboard /> },
        { path: "/deportes", element: <Deportes /> },
        { path: "/formulario", element: <Formulario /> },
      ],
    },
    {path:"/404",element:<NotFound/>},
    {path:"*",element:<Navigate to="404" replace/>}
  ]);
};

export default Routes;
