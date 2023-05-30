import React from 'react';
import { useNavigate } from 'react-router-dom';
import { message, Popconfirm } from 'antd';
import './index.less';
const Avatar: React.FC = () => {
  const navigateTo = useNavigate();

  const loginOut = () => {    
    localStorage.removeItem('lege-react-management-token');
    localStorage.removeItem('persist:root');
    message.success('退出成功');
    setTimeout(() => {
      navigateTo('/login');
    });
  };

  return (
    <Popconfirm
      title='您确定退出登陆吗?'
      // description='您确定退出登陆吗?'  
      onConfirm={loginOut}
      cancelText='No'
    >
      <div className='avatar' ></div>
    </Popconfirm>
  );
};

export default Avatar;
