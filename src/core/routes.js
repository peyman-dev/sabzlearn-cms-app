import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/home";

const routes = createBrowserRouter([
  {
    index: true, // index: true == HomePage ["/"]
    Component: HomePage,
  },
]);


export default routes