import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[],
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// 由对象组成的一个数组
// const items: MenuItem[] = [
//   getItem('Option 1', '/page1', <PieChartOutlined />),
//   getItem('Option 2', '/page2', <DesktopOutlined />),
//   getItem('User', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

// 登录请求数据后，就可以跟items这个数组进行匹配
const items: MenuItem[] = [
  {
    label: '栏目1',
    key: '/page1',
    icon: <PieChartOutlined />
  },
  {
    label: '栏目2',
    key: '/page2',
    icon: <DesktopOutlined />
  },
  {
    label: '栏目3',
    key: '/page3',
    icon: <UserOutlined />,
    children: [
      {
        label: '栏目301',
        key: '/page3/page301',
      },
      {
        label: '栏目302',
        key: '/page3/page302',
      },
      {
        label: '栏目303',
        key: '/page3/page303',
      }
    ]
  },
  {
    label: '栏目4',
    key: 'page4',
    icon: <TeamOutlined />,
    children: [
      {
        label: '栏目401',
        key: '/page4/page401',
      },
      {
        label: '栏目402',
        key: '/page4/page402',
      }
    ]
  },
  {
    label: '栏目5',
    key: '/page5',
    icon: <FileOutlined />
  }
]

const Comp: React.FC = () => {
  const navigateTo = useNavigate();
  
  const currentRoute = useLocation()

  let firstOpenKey:string = '';

  function findKey(obj: {key: string}) {
    return obj.key === currentRoute.pathname
  }

  for(let i = 0; i < items.length; i++) {
    if(items[i]!['children'] && items[i]!['children'].length > 0 && items[i]!['children'].find(findKey)) {
      firstOpenKey = items[i]!.key as string
    }
    // console.log('firstOpenKey', firstOpenKey);
    
  }

  const [openKeys, setOpenKeys] = useState([firstOpenKey]);

  const menuClick = (e: {key: string}) => {
    console.log('e', e);
    
    navigateTo(e.key)
  }

  const handleOpenChange = (keys: string[]) => {
    // 什么时候执行这个函数里面的代码？展开和回收某项菜单的时候执行这里的代码
    // console.log(keys); // keys是一个数组，记录了当前哪一项是展开的（用key记录）
    console.log(keys, 'keys');
    
    setOpenKeys([keys[keys.length-1]]);
  } 

  return (
    <Menu 
        theme="dark"
        defaultSelectedKeys={[currentRoute.pathname]} 
        mode="inline" 
        items={items} 
        onClick={menuClick}
        // 补充一个属性和事件
        // openKeys 表示当前所有展开着的数组
        openKeys={openKeys}
        // 某项菜单展开和回收的事件
        onOpenChange={handleOpenChange}
    />
  )
}

export default Comp;