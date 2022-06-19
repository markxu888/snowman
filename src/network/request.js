import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '',
    timeout: 5000
  })

  //请求拦截
  instance.interceptors.request.use(config  =>{
    return config
  },err => {
    //err.console.log();
  })

  //响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    //err.console.log();
  })

  //发送网络请求
  return instance(config)
}