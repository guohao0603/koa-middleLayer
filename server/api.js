const request = require('./request');

const BASE = 'http://test.schongsu.cn'; // 根据环境切换不同的ip
// const BASE = 'http://live.schongsu.cn'; // 根据环境切换不同的ip

const reqLogin = (data) => request(BASE + '/checkLogin',data,'POST')

const getGroupList = (data) => request(BASE + '/activity/api/party/getGroupList',data)

const getConfig = (data) => request(BASE + '/activity/api/party/home',data)

const getStarList = (data) => request(BASE + '/voice/api/finance/starList',data,'POST')

const getRichList = (data) => request(BASE + '/voice/api/finance/richList',data,'POST')

module.exports = {
    getGroupList,
    reqLogin,
    getConfig,
    getStarList,
    getRichList
}