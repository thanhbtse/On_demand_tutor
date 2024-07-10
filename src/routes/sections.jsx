import { Children, Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Error404, Loading, ScrollToTop, AdminError } from "../components";
import App from "../layout/index";
import DashboardLayout from "../layout/admin";
import TutorSearchPage from "../page/TutorSearchPage";

export const HomePage = lazy(() => import("../page/HomePage"));
export const ContactPage = lazy(() => import("../page/ContactPage"));
export const AccountPage = lazy(() => import("../page/AccountPage"));
export const TurtorInfoPage = lazy(() => import("../page/TurtorInfoPage"));
export const Router = () => {
  const routes = useRoutes([
    {
      path: "/",
      element: (
        <App>
          <ScrollToTop>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </ScrollToTop>
        </App>
      ),
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/lien-he",
          element: <ContactPage />,
        },
        {
          path: "/tim-gia-su-online",
          element: <TutorSearchPage />,
        },
        {
          path: "/tai-khoan",
          element: <AccountPage />,
        },
        {
          path: "/gia-su",
          element: <TurtorInfoPage />,
        },
        {
          path: "*",
          element: <Error404 />,
        },
      ],
    },
    {
      path: "/admin",
      element: (
        <DashboardLayout>
        <ScrollToTop>
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </ScrollToTop>
      </DashboardLayout>
      ),
      children:[
        {
          path: "*",
          element: <AdminError />,
        },
      ],
    },
  ]);
  return routes;
};
