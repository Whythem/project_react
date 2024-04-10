import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Focus from "../pages/focus";
import Search from "../pages/search";
import ErrorPage from "../pages/404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/focus/:id",
        element: <Focus />
      },
      {
        path: "/search",
        element: <Search />
      },
      {
        path: "*",
        element: <ErrorPage />
      }
    ]
  }
]);

export default router;