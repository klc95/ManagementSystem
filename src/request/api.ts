// 统一管理项目中所有的请求路径 api
import { http } from "./index";
// 验证码请求
export const CaptchaAPI = () =>
  http.get<CaptchaAPIRes>("/prod-api/captchaImage");

// 登录请求  
export const LoginAPI = (params: LoginAPIReq) =>
  http.post<LoginAPIRes>("/prod-api/login", params);

export const getHomeDataAPI = () =>
  http.get<HomeDataRes<VideoData>>("/home/getData");

  // * 获取菜单列表
export const getMenuList = () => 
	 http.get<ResultData<MenuOptions[]>>("/menu/list");