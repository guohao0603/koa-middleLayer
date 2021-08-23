const { getGroupList,getConfig,getStarList,getRichList } = require('../server/api');
class UserController {
    async login (ctx,next) { // post
        let {username,password} = ctx.request.body;
        console.log('loginParams',username,password);
        ctx.body = {
           status: 'success',
           token: 'aaxxxx12213'
        }
    }

    async userInfo (ctx,next) {
        const res2 = await getConfig({activityId:8,userId:10002561})
        const res = await getGroupList({activityId:8,userId:10002561,type:11})
        const res3 = await getStarList({userId:10002561,roomId:0,type:5,voiceType:1})
        // const res4 = await getRichList({userId:10097816,roomId:0,type:3,voiceType:2})

        const {partyList,nowTime,endTime} = res.data;
        const {isEnd,currentRace} = res2.data;
        const {resultList} = res3;

        // 获取的是请求参数   
        // console.log(ctx.query);  //{ aid: '123' }  用的最多的方式  推荐
        // console.log(ctx.request.query); // 也可以
        // console.log(ctx.querystring);  //aid=123&name=zhangsan // 获取的是一个字符串 
        // 获取url地址
        // console.log(ctx.url);    // 可以
        // console.log(ctx.request.url);  //可以
        // let {page,total} = ctx.query;
        // console.log('page-total',page,total);

        let result = {
            currentRace,
            isEnd,
            nowTime,
            endTime,
            partyList,
            resultList
        }
        ctx.body = {
            status: 'success',
            data: result
        }
    }
}
module.exports = new UserController();