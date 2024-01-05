import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
import {useUserStore} from '@/stores/user'
// 创建axios实例
const http = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
http.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  
  return config
}, e => Promise.reject(e))

// axios响应式拦截器
http.interceptors.response.use(res => res.data, e => {
 
  const code = e.response.status
  if (code === 401) {
    const userStore = useUserStore()
    
    userStore.clearUserInfo()
    //router.push('/login')
    location.href = '/login'
    //router.push({path:'/login'})
   // location.reload()
  }

  ElMessage.error(e.response.data.message)
  return Promise.reject(e)
})


export default http