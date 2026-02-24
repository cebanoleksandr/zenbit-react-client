import { type RouteObject, createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import DealsPage from "../pages/DealsPage";
import NotFoundPage from "../pages/NotFoundPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const loader = () => {
  const token = localStorage.getItem("zenbit-token");
  if (!token) throw redirect("/login");
  return null;
}

const authLoader = () => {
  const token = localStorage.getItem("zenbit-token");
  if (!!token) throw redirect("/");
  return null;
}

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { path: '/', Component: HomePage },
      { path: '/deals', loader, Component: DealsPage },
      { path: '/login', loader: authLoader, Component: LoginPage },
      { path: '/register', loader: authLoader, Component: RegisterPage },
      { path: "*", Component: NotFoundPage },
    ],
  },
];

const router = createBrowserRouter(routes);

export default router;
