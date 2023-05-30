import { Navigate,useLocation, useNavigate } from 'react-router-dom';
import { message } from 'antd';
import { useEffect } from 'react';

const LoginAuth = () => {
  const navigateTo = useNavigate()
  useEffect(() => {
    navigateTo('/');
    message.warning("您已经登录过了！");
  }, []);
  return <div></div>;
};

export default function AuthRouer(props: { children: JSX.Element }) {
  const token = localStorage.getItem('lege-react-management-token');
  const { pathname } = useLocation()
  if(pathname === '/login' && !token) {
    return props.children;                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  }
  if(pathname === '/login' && token) {
    return <LoginAuth />                                                                                                                                                                                                                                                                                                                                                                                                                                                             
  }
  if (!token) {
    message.warning("您还没有登录，请登录后再访问！");
    return <Navigate to='/login' replace />
  } else {
    return props.children
  }
}

