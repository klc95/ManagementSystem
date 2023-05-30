import * as Icon from "@ant-design/icons";
import type { MenuProps } from 'antd';
import { Menu, Spin } from 'antd';
import React, { useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getMenuList } from '@/request/api.ts'

type MenuItem = Required<MenuProps>['items'][number];

const getItem = (
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem  => {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const Comp: React.FC = () => {
  const navigateTo = useNavigate();
  
  const currentRoute = useLocation()

  let firstOpenKey:string = '';
  
  const [menuList, setMenuList] = useState<MenuItem[]>([])


  function findKey(obj: {key: string}) {
    return obj.key === currentRoute.pathname
  }

  for(let i = 0; i < menuList.length; i++) {
    if(menuList[i]!['children'] && menuList[i]!['children'].length > 0 && menuList[i]!['children'].find(findKey)) {
      firstOpenKey = menuList[i]!.key as string
    }
  }

  const [openKeys, setOpenKeys] = useState([firstOpenKey]);

  const [loading, setLoading] = useState(true)

  const deepLoopFloat = (menuList: MenuOptions[], newArr: MenuItem[] = []) => {
		menuList.forEach((item: MenuOptions) => {
			if (!item?.children?.length) return newArr.push(getItem(item.title, item.path, React.createElement(Icon[item.icon!])));
			newArr.push(getItem(item.title, item.path, React.createElement(Icon[item.icon!]), deepLoopFloat(item.children)));
		});
    console.log('newArr', newArr);
    
		return newArr;
	};

  const handleOpenChange = (keys: string[]) => {
    console.log('keys', keys);
    setOpenKeys([keys[keys.length-1]]);
  } 

  const getMenuData = async () => {
    setLoading(true);
		try {
			const { data } = await getMenuList();
			if (!data?.length) return;
			setMenuList(deepLoopFloat(data));
		} finally {
			setLoading(false);
		}
	};

  const menuClick = (e: {key: string}) => {  
    console.log('e', e.key);
    navigateTo(e.key)
  }

	useEffect(() => {
		getMenuData();
	}, []);

  return (
    <Spin spinning={loading} tip="Loading...">
      <Menu 
        theme="dark"
        defaultSelectedKeys={[currentRoute.pathname]} 
        mode="inline" 
        items={menuList} 
        onClick={menuClick}
        // 补充一个属性和事件
        // openKeys 表示当前所有展开着的数组
        openKeys={openKeys}
        // 某项菜单展开和回收的事件
        onOpenChange={handleOpenChange}
    />
   </Spin>
    
  )
}

export default Comp;