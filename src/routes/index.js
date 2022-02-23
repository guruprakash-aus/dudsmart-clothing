import React from "react";
import { useRoutes, Navigate } from "react-router-dom";
import ShopLayout from "../layouts/ShopLayout/ShopLayout";
import Authentication from "../pages/Authentication/Authentication";
import CheckoutPage from "../pages/checkout/CheckoutPage";
import CollectionPageContainer from "../pages/collection/CollectionpageContainer";
import HomePage from "../pages/homepage/HomePage";
import ShopPage from "../pages/shop/ShopPage";

const AppRoutes = ({ currentUser }) => {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "shop",
      element: <ShopLayout />,
      children: [
        {
          path: "",
          element: <ShopPage />,
        },
        {
          path: ":collectionId",
          element: <CollectionPageContainer />,
        },
      ],
    },
    {
      path: "checkout",
      element: <CheckoutPage />,
    },
    {
      path: "authentication",
      element: ProtectedRoutes(currentUser),
    },
  ]);

  return routes;
};

const ProtectedRoutes = (currentUser) => {
  return currentUser ? <Navigate to='/' /> : <Authentication />;
};

export default AppRoutes;
