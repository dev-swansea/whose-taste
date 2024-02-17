import { Suspense, lazy } from "react";
import postRouter from "./postRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading...</div>;

const Main = lazy(() => import("../pages/MainPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: <Suspense fallback={Loading}><Main /></Suspense>
  },
  {
    path: "posts",
    children: postRouter()
  },
]);

export default root;
