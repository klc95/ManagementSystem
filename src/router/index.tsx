import React, { lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

const Page1 = lazy(() => import("../views/Page1"));
const Page2 = lazy(() => import("../views/Page2"));
const Home = lazy(() => import("../views/Home"));
const Page301 = lazy(() => import("../views/Page301"));
const Page302 = lazy(() => import("../views/Page302"));
const Page303 = lazy(() => import("../views/Page303"));
const Page401 = lazy(() => import("../views/Page401"));
const Page402 = lazy(() => import("../views/Page402"));
const Page5 = lazy(() => import("../views/Page5"));
const Login = lazy(() => import("../views/Login"));
const Error = lazy(() => import("../components/ErrorPage"));

// 报错A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator.
// 懒加载的模式的组件写法，外面需要套一层 Loading 的提示加载

const withLoadingComponent = (comp: JSX.Element) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    {comp}
  </React.Suspense>
);

const routesList = [
  {
    path: "/",
    element: <Navigate to='/page1' />
  },
  {
    path: "/",
    element: (
      withLoadingComponent(<Home />)
    ),
    children: [
      {
        path: "/page1",
        element: withLoadingComponent(<Page1 />),
        meta: {
          requireAuth: false,
          key: 'page1'
        }
      },
      {
        path: "/page2",
        element: withLoadingComponent(<Page2 />),
        meta: {
          requireAuth: true,
          key: 'page2'
        }
      },
      {
        path: "/page3/page301",
        element: (
          withLoadingComponent(<Page301 />)
        ),
        meta: {
          requireAuth: false,
          key: 'page301'
        }
      },
      {
        path: "/page3/page302",
        element: (
          withLoadingComponent(<Page302 />)
        ),
        meta: {
          requireAuth: true,
          key: 'page302'
        }
      },
      {
        path: "/page3/page303",
        element: (
          withLoadingComponent(<Page303 />)
        ),
        meta: {
          requireAuth: true,
          key: 'page303'
        }
      },
      {
        path: "/page4/page401",
        element: (
          withLoadingComponent(<Page401 />)
        ),
        meta: {
          requireAuth: true,
          key: 'page401'
        }
      },
      {
        path: "/page4/page402",
        element: (
          withLoadingComponent(<Page402 />)
        ),
        meta: {
          requireAuth: true,
          key: 'page402'
        }
      },
      {
        path: "/page5",
        element: (
          withLoadingComponent(<Page5 />)
        ),
        meta: {
          requireAuth: true,
          key: 'page5'
        }
      },
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  // 嵌套路由结束
  // 访问其余路径时直接跳到首页
  {
    path: "*",
    element: <Error />
  }
];

const GetRouters = () => {
  const routes = useRoutes(routesList)
  return routes
}

export default GetRouters;