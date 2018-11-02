import axios from 'axios'
import { MessageBox } from 'element-ui'
import { Message} from 'element-ui'
import store from '../store/index'
import router from '../router/index'

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API
  // timeout: 5000,
})

// request拦截器
service.interceptors.request.use(
  config => {
    //除login之外所有的请求必须携带token
    if(!config.url.includes('login')){ 
      config.headers['Authentication-Token'] = store.getters.userinfo.authentication_token
    }
    return config
  },
  error => {
    Promise.reject(error)
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    return  response
  },
  error => {
    // response 判断token过期，跳转到登录页面
    if(error.response.data.errcode === 10001){
      router.push({path: '/login'});
    }
    // 拦截响应的错误信息 统一提示
  	Message({
      message: error.response.data.message,
      type: 'warning',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)
export default service
