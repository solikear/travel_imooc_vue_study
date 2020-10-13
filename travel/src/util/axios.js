import axios from 'axios'
// import { Toast } from 'vant'
// import router from '../router'
import {Message, Loading} from 'element-ui'

const url = "http://localhost:8080/mock"
axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? url : '/api'
axios.defaults.withCredentials = true
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest'
axios.defaults.headers['token'] = localStorage.getItem('token') || ''
axios.defaults.headers.post['Content-Type'] = 'application/json'

let loadingInstance = null
let msgOption = {
    offset: 0
}

let httpCode = {        //这里我简单列出一些常见的http状态码信息，可以自己去调整配置
    400: '请求参数错误',
    401: '权限不足, 请重新登录',
    403: '服务器拒绝本次访问',
    404: '请求资源未找到',
    500: '内部服务器错误',
    501: '服务器不支持该请求中使用的方法',
    502: '网关错误',
    504: '网关超时'
}

axios.interceptors.request.use(
    config => {
        loadingInstance = Loading.service({
            lock: true,
            text: '数据加载中，请稍后...',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.3)',
            fullscreen: true,
        })
        return config
        // if (config.method === 'post') {
        //     config.data = qs.stringify(config.data)
        // }
    },
    err => {
        loadingInstance.close()
        Message.error({
            message: '请求错误',
            offset: 0,
        })
        return Promise.reject(err)
    }
)

axios.interceptors.response.use(res => {
        if (typeof res.data !== 'object') {
            // Toast.fail('服务端异常！')
            return Promise.reject(res)
        }
        console.log(res)
        if (res.status === 200) {
            loadingInstance.close()
        } else {
            loadingInstance.close()
            Message.error("请求出错！" + res.status)
        }
        return res.data
    }, (err) => {
        if (err.response) {
            // 根据请求失败的http状态码去给用户相应的提示
            let tips = err.response.status in httpCode ? httpCode[err.response.status] : "请求出现错误！"
            Message({
                message: tips,
                type: 'error'
            })
            loadingInstance.close()
            // Message.error({
            //     message: '请求失败，请稍后再试',
            //     offset: 5,
            // })
        }
        return Promise.reject(err)
    }
)

export default axios