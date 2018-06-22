const express=require('express');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
const userRoutes=require('./server/api/user');
const env=process.env.NODE_ENV||'development';
const path=require('path');
let app=express();

let dburl='mongodb://localhost:27017/mickey';
//连接mongodb数据
if(env!=='development'){
  dburl='mongodb://localhost:27017/mickey'
}
mongoose.connect(dburl,function (err) {
  if(err){
    console.log("MongoDB数据库连接出错！");
  }
  console.log("MongoDB数据库连接成功！")
});
mongoose.Promise=global.Promise;
// app.all('*', function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//   res.header("X-Powered-By",' 3.2.1');
//   res.header("Content-Type", "application/json;charset=utf-8");
//   next();
// });
//解析消息体的中间件，以json格式解析
app.use(bodyParser.json());
//解决跨域问题
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Headers', 'accesstoken');
  next();
});

app.set('token','mickey-blog');
app.all('/api/*',require('./server/middlewares/jwtMid'));
app.use('/',userRoutes);
//如果不是开发环境
//express.static 是 Express 内置的唯一一个中间件。
// 是基于 serve-static 开发的，负责托管 Express 应用内的静态资源。
app.use(express.static('./dist'));

app.use(express.static(path.join(__dirname,'dist')));

//错误处理
app.use((err,req,res)=>{
  res.status(442).send({error:err.name})
});

//监听端口
const server=app.listen(3000,()=>{
  console.log('express服务器正在监听3000端口')
});

