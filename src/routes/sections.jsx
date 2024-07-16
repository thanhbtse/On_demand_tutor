import { Children, Suspense, lazy } from "react";
import { Navigate, Outlet, useRoutes } from "react-router-dom";
import { Error404, Loading, ScrollToTop, AdminError } from "../components";
import App from "../layout/index";
import DashboardLayout from "../layout/admin";
import TutorSearchPage from "../page/TutorSearchPage";
import ProductDetail from "../section/Turtor/productDetail";
import SubjectProduct from "../section/Subject/SubjectProduct";
import SubjectDetail from "../section/Subject/SubjectDetail";
import TurtorDashboardLayout from "../layout/turtordashboard";
import TurTorError from "../components/TurtorError";
import useAuth from "../hooks/useAuth";
//User Page
export const HomePage = lazy(() => import("../page/HomePage"));
export const ContactPage = lazy(() => import("../page/ContactPage"));
export const AccountPage = lazy(() => import("../page/AccountPage"));
export const DetailTutorPage = lazy(() => import("../page/DetailTutorPage"));
export const TurtorInfoPage = lazy(() => import("../page/TurtorInfoPage"));
export const SubjectPage = lazy(() => import("../page/SubjectPage"));
export const CartPage = lazy(() => import("../page/CartPage"));
export const ProfilePage = lazy(() => import("../page/ProfilePage"));
export const GioiThieuPage = lazy(() => import("../page/GioiThieuPage"));
export const RegisterPage = lazy(() => import("../page/RegisterPage"));

//Admin Page
export const TurtorTablePage = lazy(() => import("../page/admin/turtorTable"));
export const ReportView = lazy(() => import("../page/admin/ReportTable"));

//Turtor Page
export const TurtorCourse = lazy(() => import("../page/turtor/TurtorCourse"));
export const MessagePage = lazy(() => import("../page/turtor/MessagePage"));

export const Router = () => {
  const { isAuthenticated, infoUser } = useAuth();

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
          path: "/dang-nhap",
          element: isAuthenticated ? <ProfilePage /> : <AccountPage />,
        },
        {
          path: "/dang-ky",
          element: <RegisterPage />,
        },
        {
          path: "/gia-su",
          element: <TurtorInfoPage />,
        },
        {
          path: "/tutors/:id",
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
          path: "/gio-hang",
          element: <CartPage />,
        },
        {
          path: "/ho-so",
          element: <ProfilePage />,
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
        {
          path: "/admin/turtor/view",
          element: <TurtorTablePage />,
        },
        {
          path: "/admin/report/view",
          element: <ReportView />,
        },
      ],
    },
    {
      path: "/turtor",
      element: (
        <TurtorDashboardLayout>
          <ScrollToTop>
            <Suspense fallback={<Loading />}>
              <Outlet />
            </Suspense>
          </ScrollToTop>
        </TurtorDashboardLayout>
      ),
      children: [
        {
          path: "/turtor/program/view",
          element: <TurtorCourse />,
        },
        {
          path: "/turtor/message",
          element: <MessagePage />,
        },
        {
          path: "*",
          element: <TurTorError />,
        },
      ],
    },
  ]);
  return routes;
};
