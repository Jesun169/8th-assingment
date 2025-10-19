import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AppInfo from '../Pages/AppInfo/AppInfo';
import AppDetails from '../Pages/AppDetails/AppDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        loader: () => fetch("/8appData.json"),
        element: <Home />, 
      },
      {
        path: "appInfo",
        element: <AppInfo />,
      },
      {
        path: "appDetails/:appId",
        loader: () => fetch("/8appData.json"),
        element: <AppDetails />,
      },
    ],
  },
]);
