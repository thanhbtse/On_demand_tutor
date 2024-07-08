import { Children, Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Error404, Loading, ScrollToTop } from "../components";
import App from "../layout";
import DashboardLayout from "../layout";
import TutorSearchPage from "../page/TutorSearchPage";
import { Breadcrumb } from "antd";

export const HomePage = lazy(() => import("../page/HomePage"));
export const ContactPage = lazy(() => import("../page/ContactPage"));
export const AccountPage = lazy(() => import("../page/AccountPage"));
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
          path: "*",
          element: <Error404 />,
        },
      ],
    },
    // {
    //   path: "/admin",
    //   element: (
    //     <DashboardLayout>
    //     <ScrollToTop>
    //       <Suspense fallback={<Loading />}>
    //         <Outlet />
    //       </Suspense>
    //     </ScrollToTop>
    //   </DashboardLayout>
    //   ),
    //   children:[

    //   ],
    // },
  ]);
  return routes;
};
