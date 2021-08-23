//引入 Koa 服务器
const Koa = require('koa');
const app = new Koa();
// 解决post方法获取参数问题
const bodyParser = require('koa-bodyparser');
const cors = require('koa2-cors');
// 路由配置
const apiRouter = require('./router/index');

// 配置中间件
app.use(bodyParser({
    extended: true
}))
// 解决跨域问题
app.use(cors({
    origin: function (ctx) {
        return '*'
        // return 'http://localhost:1888'
    }
}))

// router.routes作用：启动路由
// allowedMethods作用：当所有路由中间件执行完成之后,若ctx.status为空或者404的时候,丰富response对象的header头.
app.use(apiRouter.routes())


app.listen(9999,()=>{
    console.log('listen at http://localhost:9999')
});