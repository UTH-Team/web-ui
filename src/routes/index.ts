import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import NoneLayout from "../layouts/NoneLayout";
import { RouteType } from "../types/RouteType";

const PublicRoute: RouteType[] = [
  {
    path: "/",
    page: HomePage,
    children: [
      {
        path: "tab1",
        page: Tab1,
        layout:NoneLayout
      },
      {
        path: "tab2",
        page: Tab2,
        layout:NoneLayout
      },
    ],
  },
  {
    path: "/about",
    page: AboutPage,
  },
];

const PrivateRoute : any[] = [
    
]

export {PrivateRoute,PublicRoute}