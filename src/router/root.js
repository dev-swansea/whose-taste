import { Suspense, lazy } from "react";

const { createBrowserRouter } = require("react-router-dom");

const Loading = <div>Loading...</div>;

const Main = lazy(() => import("../pages/MainPage"));
const SignIn = lazy(() => import("../pages/SignIn"));
const SignUp = lazy(() => import("../pages/SignUp"));
const Posts = lazy(() => import("../pages/Posts"));
const Posting = lazy(() => import("../pages/Posting"));
const MyPage = lazy(() => import("../pages/MyPage"));

const root = createBrowserRouter([
  {
    path: "",
    element: <Suspense fallback={Loading}><Main /></Suspense>
  },

  {
    path: "signin",
    element: <Suspense fallback={Loading}> <SignIn /></Suspense>,
  },
  {
    path: "signup",
    element: <Suspense fallback={Loading}> <SignUp /></Suspense>,
  },
  {
    path: "posts",
    element: <Suspense fallback={Loading}><Posts /></Suspense>
  },
  {
    path: "posting",
    element: <Suspense fallback={Loading}><Posting /></Suspense>
  },
  {
    path: "mypage",
    element: <Suspense fallback={Loading}><MyPage /></Suspense>
  },
]);

export default root;
