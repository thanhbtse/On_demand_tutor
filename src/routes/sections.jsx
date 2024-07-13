import { Children, Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Error404, Loading, ScrollToTop, AdminError } from "../components";
import App from "../layout/index";
import DashboardLayout from "../layout/admin";
import TutorSearchPage from "../page/TutorSearchPage";
import ProductDetail from "../section/Turtor/productDetail";
import SubjectProduct from "../section/Subject/SubjectProduct";
import SubjectDetail from "../section/Subject/SubjectDetail";

export const HomePage = lazy(() => import("../page/HomePage"));
export const ContactPage = lazy(() => import("../page/ContactPage"));
export const AccountPage = lazy(() => import("../page/AccountPage"));
export const DetailTutorPage = lazy(() => import("../page/DetailTutorPage"));
export const TurtorInfoPage = lazy(() => import("../page/TurtorInfoPage"));
export const SubjectPage = lazy(() => import("../page/SubjectPage"));
export const GioiThieuPage = lazy(() => import("../page/GioiThieuPage"));
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
          path: "/view-detail-tutor",
          element: <DetailTutorPage />,
        },
        {
          path: "/product-detail",
          element: <ProductDetail />,
        },
        {
          path: "/mon-hoc",
          element: <SubjectPage />,
        },
        {
          path: "/mon-hoc/:id",
          element: <SubjectProduct />,
        },
        {
          path: "/mon-hoc/:id/ky-nang",
          element: <SubjectDetail />,
        },
        {
          path: "/gioi-thieu",
          element: <GioiThieuPage />,
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
      children: [
        {
          path: "*",
          element: <AdminError />,
        },
      ],
    },
  ]);
  return routes;
};
