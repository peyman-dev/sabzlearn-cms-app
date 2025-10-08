import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/index";
import UsersPage from "../pages/users/page";
import CommentsPage from "../pages/comments/page";
import ProductsPage from "../pages/products/page";
import TicketsPage from "../pages/tickets/page";

const routes = createBrowserRouter([
  {
    index: true, // index: true == HomePage ["/"]
    Component: HomePage,
  },
  {
    path: "/products",
    Component: ProductsPage,
  },
  {
    path: "/users",
    Component: UsersPage,
  },
  {
    path: "/comments",
    Component: CommentsPage,
  },
  {
    path: "/tickets",
    Component: TicketsPage,
  },
]);

export default routes;
