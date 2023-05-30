import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError} from "axios";

// 创建axios实例
const instance: AxiosInstance = axios.create({
  // 基本请求路径的抽取
  baseURL: "",
  // 这个时间是你每次请求的过期时间，这次请求认为20秒之后这个请求就是失败的
  timeout: 20000,    
});
// 请求拦截器
instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    let token: string | null = localStorage.getItem('lege-react-management-token') 
    if(config && config?.headers && token) {
      config.headers.token = token   
    }
    return config;
  },
  (err: AxiosError) => {
    return Promise.reject(err);
  }
);
// 响应拦截器
instance.interceptors.response.use(
  (res: AxiosResponse) => {
    // 业务状态码 在请求的preview可以看到，前提是后端提供（例如resCode）
    // const data = response.data
    // if(data.resCode === 0) {
    //   return response;
    // } else {
    //  const code = data.resCode
    //  // 处理业务错误的逻辑
    //  if(code === 'xxx') {
    //     ...
    //  }
    //   return Promise.reject(data)
    // }


    return res.data;
  },
  (err: AxiosError) => {
    const status = err.response?.status;
    switch (status) {
      case 400:
        
        break;
      case 401:

        break;
      default:
        break;
    }

    return Promise.reject(err);
  }
);

export const http = {
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T> {
    return instance.get(url, config)
  },
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return instance.post(url, data,  config)
  }
}

 
