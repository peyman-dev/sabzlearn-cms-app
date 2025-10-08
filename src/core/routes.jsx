import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home/index.jsx";
import UsersPage from "../pages/users/page.jsx";
import CommentsPage from "../pages/comments/page.jsx";
import ProductsPage from "../pages/products/page.jsx";
import TicketsPage from "../pages/tickets/page.jsx";
import ApplicationLayout from "../components/layout/index.jsx";

const routes = createBrowserRouter([
  {
    element: <ApplicationLayout />,
    children: [
      {
        index: true, // index: true == HomePage ["/"]
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/users",
        element: <UsersPage />,
      },
      {
        path: "/comments",
        element: <CommentsPage />,
      },
      {
        path: "/tickets",
        element: <TicketsPage />,
      },
    ],
  },
]);

export default routes;
