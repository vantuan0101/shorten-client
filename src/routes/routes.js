import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CreateLink from "../components/CreateLink/CreateLink";
import ErrorPage from "../components/error-page";
import Login from "../pages/account/Login/Login";
import Register from "../pages/account/Register/Register";
import MyUrl from "../pages/MyUrl/MyUrl";
import ShortenList from "../pages/ShortenList/ShortenList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <ShortenList />,
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
]);

export default router;
