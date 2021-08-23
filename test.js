// console.log(process.env.NODE_ENV); // process 进程 全局模块

// require path fs 系统模块
// require 1.如果有路径,就去路径里面找 2.没有的话就去node_modules 里面找 3.再去node安装目录找
let path = require('path');
let fs = require('fs');
// console.log(path.resolve(__dirname,'index.js')); // 输出绝对路径

// fs.readFile('./test.text',(err,data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(data.toString());
//     }
// })
// fs.writeFile('test.text','月薪:100000',{flag: 'a'},(err) => {
//     if (err) {
//         throw err
//     }
// })

// 异步读取
// let data = fs.readFileSync('./test.text'); 
// console.log(data.toString());

// 自定义模块
// export 导出的模块

// http 模块
let http = require('http');

http.createServer((req,res)=>{
    console.log(req.url)
    fs.readFile(`./${req.url}`,(err,data)=>{
        if (err) {
            res.writeHead(404)
            res.end('404 not found')
        } else {
            res.end(data)
        }
    })
    // res.write('index')
    // res.end()
}).listen(9999,()=>{
    console.log('listen at http://localhost:9999')
})

/**
 * GET:
 * 1.url?user=xxx&pass=xxx
 * 2.<32k
 * 3.url 模块解析参数
 * 4.url.parse(req.url,true)
 * 
 * POST:
 * 1.放在请求体
 * 2.<2G
 * 3.querystring 模块解析参数
 * 4.querystring.parse(data)
 */