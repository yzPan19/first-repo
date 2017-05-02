

// 引入express框架
const express = require('express');
const app = express();


// 配置路由规则
app.get('/',(req,res)=>{
    res.send('Hello,World!');
})


// 监听端口
app.listen(3000,()=>{
    console.log('服务器运行在3000端口');
})