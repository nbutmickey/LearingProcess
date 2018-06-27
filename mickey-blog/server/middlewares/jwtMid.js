//验证token中间件
const jwt=require('jsonwebtoken');
module.exports=function (req,res,next) {
  if(req.method!=='POST'){
    next()//post请求才需要权限验证
  }else{
    const token=req.headers.accesstoken||req.query.token;
    if(token){
      console.log(token);
      jwt.verify(token,'mickey',(err,decoded) =>{
        if(err){
          return res.json({
            success:false,
            message:'token 验证失败'
          });
        }else{
          console.log("accessToken pass");
          req.decoded=decoded;
          next()
        }
      })
    }else{
      res.json({
        success:false,
        message:'No token Provided'
      })
    }
  }
};
