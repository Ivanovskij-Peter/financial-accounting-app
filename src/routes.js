import { lazy } from "react";

const routes = [
  {
    label: "Домашняя страница",
    path: "/",
    exact: true,
    component: lazy(() => import("./components/pages/HomePage")),
    redirectTo: "/login",
    privated: true,
    restricted: true,
  },
  {
    label: "Отчеты",
    path: "/reports",
    exact: true,
    redirectTo: "/login",
    component: lazy(() => import("./components/Reports")),
    privated: true,
    restricted: true,
  },
  {
    label: "Регистация",
    path: "/register",
    exact: true,
    redirectTo: "/login",
    component: lazy(() => import("./components/AuthForm")),
    privated: false,
    restricted: true,
  },
  {
    label: "Вход",
    path: "/login",
    exact: true,
    component: lazy(() => import("./components/AuthForm")),
    privated: false,
    restricted: true,
  },
];

export default routes;
