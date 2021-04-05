import axios from 'axios'
// qs 是对 post 请求 data 进行处理，不然后台接收不了数据
// 因为axios post请求默认Content-type是 application/json
import qs from 'qs'
import { Loading } from 'element-ui'

let loadings
axios.defaults.timeout = 5000 // 5s没响应则认为该请求失败
axios.defaults.baseURL = ''
axios.defaults.withCredentials = true

// http request 拦截器 所有请求发出前都需要执行以下代码
axios.interceptors.request.use(
  request => {
    request.data = qs.stringify(request.data)
    loadings = Loading.service()
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

axios.interceptors.response.use(
  request => {
    loadings.close()
    return request
  },
  error => {
    return Promise.reject(error)
  }
)

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get (url, params) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    }).then(res => {
      resolve(res.data)
    }).catch(err => {
      reject(err.data)
    })
  })
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post (url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, qs.stringify(params))
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
