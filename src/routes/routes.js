import { createBrowserRouter } from "react-router-dom";
import App from "../App";
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
      },
      {
        path: "/my-url",
        element: <MyUrl />,
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
