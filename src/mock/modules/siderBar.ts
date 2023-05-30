export default {
  getMenuList: () => {
    let token = localStorage.getItem('lege-react-management-token') 
    let res
    if(token === 'dasfdsasff_412312') {
      res = {
        code: 200,
        msg: '管理员所能看见的菜单栏',
        data: [
          {
            title: '栏目1',
            path: '/page1',
            icon: 'PieChartOutlined'
          },
          {
            title: '栏目2',
            path: '/page2',
            icon: 'DesktopOutlined'
          },
          {
            title: '栏目3',
            path: '/page3',
            icon: 'UserOutlined',
            children: [
              {
                title: '栏目301',
                path: '/page3/page301',
              },
              {
                title: '栏目302',
                path: '/page3/page302',
                
              },
              {
                title: '栏目303',
                path: '/page3/page303',
              }
            ]
          },
          {
            title: '栏目4',
            path: 'page4',
            icon: 'TeamOutlined',
            children: [
              {
                title: '栏目401',
                path: '/page4/page401',
              },
              {
                title: '栏目402',
                path: '/page4/page402',
              }
            ]
          },
          {
            title: '栏目5',
            path: '/page5',
            icon: 'FileOutlined'
          }
        ]
      } 
    } 
    else {
      res = {
        code: 200,
        msg: '普通用户所能看见的菜单栏',
        data: [
          {
            title: '栏目1',
            path: '/page1',
            icon: 'PieChartOutlined'
          },
          {
            title: '栏目2',
            path: '/page2',
            icon: 'DesktopOutlined'
          },
          {
            title: '栏目3',
            path: '/page3',
            icon: 'UserOutlined',
            children: [
              {
                title: '栏目301',
                path: '/page3/page301',
              },
              {
                title: '栏目302',
                path: '/page3/page302',
              },
              {
                title: '栏目303',
                path: '/page3/page303',
              }
            ]
          }
        ]
      } 
    } 
    return res
  } 
}



