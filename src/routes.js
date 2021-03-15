import { lazy } from "react";

const routes = [
  {
    label: "",
    path: "/",
    exact: true,
    //   component: lazy(() => import("./pages/LoginPage")),
    privated: false,
    restricted: true,
  },
  {
    label: "Регистация",
    path: "/register",
    exact: true,
    //   component: lazy(() => import("./pages/RegistrationPage")),
    privated: false,
    restricted: true,
  },
  {
    label: "Вход",
    path: "/login",
    exact: true,
    //   component: lazy(() => import("./pages/LoginPage")),
    privated: false,
    restricted: true,
  },
];

export default routes;
