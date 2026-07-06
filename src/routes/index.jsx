import { createBrowserRouter } from "react-router-dom";

import RootLayout from "@/layouts/RootLayout";
import Home from "@/pages/home";
import Scan from "@/pages/scan";
import History from "@/pages/history";
import Result from "@/pages/result";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "scan",
        element: <Scan />,
      },
      {
        path: "result",
        element: <Result />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);

export default router;