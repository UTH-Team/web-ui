import React from "react";
import { Route, Routes } from "react-router-dom";
import { PublicRoute } from ".";
import NotFoundPage from "../pages/NotFoundPage";
import DefaultLayout from "../layouts/DefaultLayout";
import { RouteType } from "../types/RouteType";
import Auth from '../pages/Auth/Auth'; // Import the Auth component

const CustomRoutes: React.FC = () => {
  const renderRoutes = (routes: RouteType[]) =>
    routes.map((route, index) => {
      const Component = route.page;
      const Layout = route.layout || DefaultLayout;

      return (
        <Route
          key={index}
          path={route.path}
          element={
            <Layout>
              <Component />
            </Layout>
          }
        >
          {route.children && renderRoutes(route.children)}
        </Route>
      );
    });

  return (
    <Routes>
      {renderRoutes(PublicRoute)}
      <Route
        path="*"
        element={
          <DefaultLayout>
            <NotFoundPage />
          </DefaultLayout>
        }
      />
      <Route path="/auth" element={<Auth />} />

    </Routes>
  );
};

export default CustomRoutes;
