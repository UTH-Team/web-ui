import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import Tab1 from "../components/Tab1";
import Tab2 from "../components/Tab2";
import NoneLayout from "../layouts/NoneLayout";
import { RouteType } from "../types/RouteType";
import AuctionPage from "../pages/AuctionPage";
import ProductDetailPage from "../pages/ProductDetailPage";
import Auth from "../pages/Auth/Auth";

const PublicRoute: RouteType[] = [
  {
    path: "/",
    page: HomePage,
    children: [
      {
        path: "",
        page: Tab1,
        layout:NoneLayout
      },
      {
        path: "cart",
        page: Tab2,
        layout:NoneLayout
      },
    ],
  },
  {
    path: "/about",
    page: AboutPage,
  },
  {
    path: "/auction",
    page: AuctionPage,
  },
  {
    path: "/auth",
    page: Auth,
    layout :NoneLayout
  },
  {
    path: "/product/:id",
    page: ProductDetailPage,
  }
];

const PrivateRoute : any[] = [
    
]

export {PrivateRoute,PublicRoute}