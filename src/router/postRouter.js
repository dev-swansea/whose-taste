import { Suspense, lazy } from "react";
import { Navigate } from "react-router-dom";

const Loading = <div>Loading ...</div>

const PostRead = lazy(() => import("../pages/post/ReadPage"))
const PostList = lazy(() => import("../pages/post/ListPage"))
const PostWrite = lazy(() => import('../pages/post/WritePage'))
const PostModify = lazy(() => import('../pages/post/ModifyPage'))

const postRouter = () => {
  return [
    {
      path: "",
      element: <Navigate replace to="list" />
    },
    {
      path: "list",
      element: <Suspense fallback={Loading}><PostList /></Suspense>
    },
    {
      path: "read/:pno",
      element: <Suspense fallback={Loading}><PostRead /></Suspense>
    },
    {
      path: "write",
      element: <Suspense fallback={Loading}><PostWrite /></Suspense>
    },
    {
      path: "modify/:pno",
      element: <Suspense fallback={Loading}><PostModify /></Suspense>
    }
  ];
};

export default postRouter;
