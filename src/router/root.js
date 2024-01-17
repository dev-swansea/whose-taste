import { Suspense, lazy } from "react";
import postRouter from "./postRouter";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading...</div>;

const Main = lazy(() => import("../pages/MainPage"));
const Posts = lazy(() => import("../pages/post/ListPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: <Suspense fallback={Loading}><Main /></Suspense>
  },
  {
    path: "post",
    children: postRouter()
  },
]);

export default root;
