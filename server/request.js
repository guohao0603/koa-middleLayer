const axios = require('axios');

axios.defaults.timeout = 200000;
axios.interceptors.request.use(
    config => {
        config.headers['auth-token'] = 'ea3d97077cae407d98a4f8b8c92ec3b4';
        config.headers['clientId'] = 'admin'
        config.headers['grantType'] = 'password'
        config.headers['Accept'] = 'application/json'
        config.headers['clientSecret'] = 'Dz69lOdusGT6rqhU'
        config.headers['Content-Type'] = 'application/json'
        return config;
    },
    error => {
        return Promise.reject(error);
    }
)
function request(url, data = {}, type = 'GET'){
    return new Promise((resolve,reject)=>{
        let promise;
        // 1.执行异步请求
        if (type === 'GET') {
            let values = {
                ...data
            }
            promise = axios.get(url, { // 配置对象
                params: values    // 指定请求参数
            })
        }else if (type === 'POST') {
            let values = {
                ...data
            }
            promise = axios.post(url, values)
        }
        //2.如果成功了，调用resolve(value)
        promise.then(response =>{
            resolve(response.data)
        }).catch(error =>{
            console.log('请求出错了:'+error.message);
        })
    })
}


module.exports = request;