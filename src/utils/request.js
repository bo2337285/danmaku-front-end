import axios from 'axios'
import { Message } from 'element-ui'
import config from './config'
// axios实例
const service = axios.create({
  baseURL: config.baseURL, // url = base url + request url
  timeout: 10000, // request timeout
  method: 'post',
  // 设置缺省头部字段
  headers: {
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  crossDomain: true
})

service.interceptors.response.use(
  res => {
    const resData = res.data
    return Promise.resolve(resData)
  },
  error => {
    Message({
      message: error,
      type: 'error',
      duration: 1500,
      showClose: true
    })
    return Promise.reject(error)
  }
)
/**
 * @description 对service的包装方法
 * @param {String} url 请求url
 * @param {Object} data post请求携带的参数
 * @param {Object} _config 自行定义的请求配置,用于控制响应结果处理策略
 * @param {Boolean} _config.ignoreError 用于阻拦默认全局会对业务异常信息进行弹窗提示
 * @param {Boolean} _config.mock 用于手动切换该接口到yapi的mock服务商
 *
 *  在api文件中以const getList = createApi('/table/list')方式声明,
 *  在外部使用时以api.getList({params:'11'},{ignoreError: false})
 *
 */
export const createApi = url => (
  data,
  _config = { ignoreError: false, mock: false }
) => {
  let _url = url
  // // 判断是开发环境并且配置了mock参数
  // if (process.env.NODE_ENV === "development" && _config.mock) {
  //   _url = process.env.VUE_APP_MOCK_API + url;
  // }
  return service({ url: _url, method: 'post', data, _config })
}

//  导出axios实例
export const request = service
