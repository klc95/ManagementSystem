import { useLocation, Navigate } from "react-router-dom";
import store from "@/store/index";

const AuthRouter = (props: { children: JSX.Element }) => {
	const { pathname } = useLocation();

	const token = localStorage.getItem('lege-react-management-token');

	if (!token) return <Navigate to="/login" replace />;

	const dynamicRouter = store.getState().handleMenu;
  
	const staticRouter = ['/', '/404'];

	const routerList = dynamicRouter.menuList.concat(staticRouter);
  
	if (routerList.indexOf(pathname) == -1) return <Navigate to="/404" />;

	return props.children;
};

export default AuthRouter;
