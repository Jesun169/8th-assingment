import { createBrowserRouter } from "react-router-dom";
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import AppInfo from '../Pages/AppInfo/AppInfo';
import AppDetails from '../Pages/AppDetails/AppDetails';
import AllApps from "../Pages/AllApps/AllApps";
import Installation from "../Components/Installation/Installation";

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
        loader:()=>fetch("/20appData.json"),
        element: <AppInfo />,
      },
      {
        path: 'installed',
        element: <Installation />,
        loader: () => fetch('/20appData.json')
      },

      // {
      //   path: "installation",
      //   element:<Installation></Installation>
      // },
      {
        path: "appDetails/:appId",
        loader: () => fetch("/20appData.json"),
        element: <AppDetails />,
      },
    ],
  },
]);

export default router;
