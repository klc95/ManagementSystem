// 这个文件专门定义请求参数的类型，和响应的类型

// 验证码的响应类型约束
interface CaptchaAPIRes {
  msg: string;
  img: string;
  code: number;
  captchaEnabled: boolean;
  uuid: string;
}
// 登录请求参数类型约束
interface LoginAPIReq{
  username: string; 
  password: string;  
  code: string;   
  uuid: string;    
}
// 登录的响应类型约束
interface LoginAPIRes{
  msg: string;
  code: number;
  token: string;   
  role?: string
}


// 侧边栏菜单响应类型约束
// interface MenuOptions {
//   path: string;
//   title: string;
//   icon?: string;
//   children?: MenuOptions[];
// } 
interface MenuOptions {
  path: string;
  title: string;
  icon?: string;
  isLink?: string;
  close?: boolean;
  children?: MenuOptions[];
}

interface VideoData {
  [idx: number]: {
    name: string,
    value: number
  }
}

interface HomeDataRes<T>{
  code: number;
  data: T
}

interface ResultData<T = any>  {
  code: number,
  msg?: string,
	data?: T;
}