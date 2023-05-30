import Mock from 'mockjs'
import homeApi from './modules/account'
import roleApi from './modules/login'
import siderBarApi from './modules/siderBar'
 
// 设置200-2000毫秒的延迟请求数据
Mock.setup({
  timeout: '200-2000'
}) 

// 首页相关
// 拦截的是/home/getData的请求
Mock.mock(/\/home\/getData/, 'get', homeApi.getStatisticalData) 

// 登陆
Mock.mock(/\/prod-api\/login/, 'post', roleApi.getRole) 

// 获取菜单数据
Mock.mock(/\/menu\/list/, 'get', siderBarApi.getMenuList) 


