import { Children, Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Error404, Loading, ScrollToTop } from "../components";
import App from "../layout";


export const HomePage = lazy(() => import("../page/HomePage"));

export const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <App>
          <ScrollToTop />
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </App>
      ),
      children: [
        {
          path: "/",
          element: <HomePage/>,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
  ]);
  return routes;
};
