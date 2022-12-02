import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateLink from "../components/CreateLink/CreateLink";
import ErrorPage from "../components/error-page";
import ExpireComponent from "../components/Exprire/Exprire";
import NotFound from "../components/NotFound/NotFound";
import UnAuthorize from "../components/UnAuthorize/UnAuthorize";
import Login from "../pages/account/Login/Login";
import AdminAccount from "../pages/account/MyAccount/components/AdminAccount/AdminAccount";
import MyAccount from "../pages/account/MyAccount/MyAccount";
import UserAccount from "../pages/account/MyAccount/UserAccount/UserAccount";
import Register from "../pages/account/Register/Register";
import Home from "../pages/Home/Home";
import MyUrl from "../pages/MyUrl/MyUrl";
import ShortenList from "../pages/ShortenList/ShortenList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ShortenList />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/my-account",
        element: <MyAccount />,
        errorElement: <ErrorPage />,
      },
      {
        path: "/my-url",
        element: <MyUrl />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "/my-url/:showLink",
            element: <CreateLink />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/unauthorized",
    element: <UnAuthorize />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/expired",
    element: <ExpireComponent />,
    errorElement: <ErrorPage />,
  },
  {
    path: "*",
    element: <NotFound />,
    errorElement: <ErrorPage />,
  },
]);

export default router;
