let express=require('express');
let router = express.Router();
let User=require('../models/user');
let jwt=require('jsonwebtoken');
let bcrypt=require('bcryptjs');

//获取单个用户信息
router.get('/user',(req,res,next)=>{
  const token = req.headers.accesstoken;
  const decode = jwt.verify(token, 'mickey');
  const username=decode.name;
  User.findOne({name:username}).then(
    user=>{
     res.json(user);
    }
  ).catch(next);
});

//用户登陆或者注册
router.post('/users/login',(req,res,next)=>{
    let data={
      username:req.body.params.username,
      password:req.body.params.password,
      type:req.body.params.type
    };
    if(data.type==='signin'){
        User.findOne({name:data.username}).then(user=>{
          if(user!==null){
            //从数据库中取用户记录并通过bcrypt进行匹配
            if(!bcrypt.compareSync(data.password,user.password)) {
              res.json(
                {
                  success:false,
                  message:'认证失败，密码错误'
                }
              )
            }else{
              //如果密码正确
              const userToken={
                name:user.name,
                id:user._id
              };
              //添加密钥
              const secret='mickey';
              const token=jwt.sign(userToken,secret);
              res.json({
                success:true,
                message:'登陆成功',
                token:token,
                role:user.role
              });
            }
          }else{
            res.json({
              success:false,
              message:'用户不存在'
            });
          }
        }).catch(next)
    }else if(data.type==='signup'){
          User.findOne({name:data.username}).count().then(count=>{
            if(count>0){
              res.json({
                success:false,
                message:'该用户名已经存在'
            });
            }else{
              //对密码进行加盐处理
              const  salt=bcrypt.genSaltSync(10);
              const hash_password=bcrypt.hashSync(data.password,salt);
              const userInfo={
                name:data.username,
                password:hash_password,
                avatar_url:'http://i1.fuimg.com/605011/1f0138a7b101b0f1.jpg',
                role:'user'
              };
                User.create(userInfo).then(
                  (user)=>{
                   const userToken={
                     name:user.username,
                     id:user._id
                   };
                   //生成密钥
                    const secret='mickey';
                    const token=jwt.sign(userToken,secret);
                    res.json({
                      success:true,
                      message:'注册成功',
                      token:token
                    });
                  }
                )
            }
          }).catch(next)
    }
  }
);

module.exports=router;
