<template>
  <transition name="slide_fade">
  <div class="bg">
    <myHeader></myHeader>
    <el-button :plain="true" style="display: none">提示栏</el-button>
<div class="login_box">
    <h3>Welcome You</h3>
    <div class="login_form">
      <div class="input_outer">
        <span class="u_user"></span>
        <input type="text" v-model="uname" class="text" placeholder="请输入用户名"/>
      </div>
      <div class="input_outer">
        <span class="us_user"></span>
        <input type="password" v-model="pwd" class="text" placeholder="请输入密码"/>
      </div>
      <div class="submit_box">
        <el-button :loading="false" v-if="SignType==='signin'"   type="primary" class="submit_btn"  @click="login('signin')" >登录</el-button>
        <el-button  :loading="false" v-if="SignType==='signup'"   type="success" class="submit_btn "  @click="login('signup')" >注册</el-button>
      </div>
      <div style="position: relative;float: right">
        <a v-show="SignType==='signin'" class="signin" href="#" @click="switchSignOption">没有帐号？点击注册</a>
        <a v-show="SignType==='signup'" class="signup" href="#" @click="switchSignOption">已有账号，返回登录</a>
      </div>
    </div>
  </div>
</div>
</transition>
</template>
<script>
  import myHeader from '../components/nav/index'
  import {mapState} from 'vuex'
  import {mapMutations} from 'vuex'
    export default {
     components:{myHeader},
     methods:{
       ...mapMutations(
         [
           'setSignType',
           'setToken'
         ]
       ),
       setCookie:function(name,value){
         let exp=new Date();
         exp.setTime(exp.getTime()+24*60*60*1000);
         document.cookie=name+"="+value+";expires="+exp.toUTCString();
       },
         open_success(){
           this.$notify({
             message:this.tips,
             type:'success',
             duration:1000,
             offset: 100
           });
         },
         open_warning(){
           this.$message({
             message:this.tips,
             type:'warning'
           });
         },
         open_error(){
           this.$message({
             message:this.tips,
             type:'error'
           });
         },
          async login(type){
            // let {submitButton}=this.$refs;
            // this.disabled =true;
            if(this.uname===''||this.pwd==='')
            {
              this.tips='用户名或密码不能为空！';
              this.open_warning();
              // this.disabled =false;
              return;
            }
            this.loading=true;
            const {data:{success,message,token}}=await this.$http.post('http://localhost:3000/users/login',{
              params:{
                username:this.uname,
                password:this.pwd,
                type:type,
                role:'ordinary'
              }
            });
            this.uname='';
            this.pwd='';
            this.tips=message;
            if(success){
              console.log(token);
              this.setCookie("mickey-token",token);
              this.setToken(token);
              if(type==='signin'){
                this.open_success();
                this.$router.replace('/blog');
                this.loading=false;
                // this.disabled=false;
                return;
              }else{
                //注册成功
                this.open_success();
                this.loading=false;
                return;
              }
            }
            this.open_error();
            this.loading=true;
            // this.disabled=false;
          },
       //切换登陆和注册
       switchSignOption(){
         this.setSignType(this.SignType==='signup'?'signin':'signup');
       }
        },
        data(){
          return{
            uname:'',
            pwd:'',
            tips:'',
            loading:false
          }
        },
      //实时获取各个变量状态值，获取到的数据相当于data里面的数据
      computed:{
        ...mapState([
          'SignType',
          'token',
        ])
      }
    }
</script>

<style scoped lang="scss">
.bg{
   position: fixed;
   width: 100%;
   height: 100vh;
   background-image: url("../assets/img/bg_signin.jpg");
   background-size: cover;

}
.login_box{
  width: 400px;
  height: 500px;
  padding: 35px;
  color: #eee;
  position: absolute;
  left:50%;
  top:50%;
  margin-left: -250px;
  margin-top: -280px;
  h3{
    text-align: center;
    font:30px "microsoft yahei",Helvetica,Tahoma,Arial,"Microsoft jhengHei",sans-serif;
    color:#ffffff;
    height: 50px;
    line-height: 50px;
    padding: 0 0 35px 0;
    margin-bottom: 20px;
  }
  .login_form{
     .input_outer{
       height: 46px;
       padding: 0 5px;
       margin-bottom: 50px;
       position: relative;
       border-radius: 50px;
       border: rgba(255,255,255,0.3) 2px solid!important;
       .u_user{
         background: url("../assets/img/login_ico.png") -125px 0;
         width: 25px;
         height: 25px;
         position: absolute;
         margin: 10px 13px;
       }
       .us_user{
         background: url("../assets/img/login_ico.png") -125px -34px;
         width: 25px;
         height: 25px;
         position: absolute;
         margin: 10px 13px;
       }
       .text{
         width: 220px;
         height: 46px;
         outline: none;
         font-size:20px;
         color: #ffffff;
         display: inline-block;
         margin-left: 50px;
         border: none;
         background: none;
         line-height: 46px;
       }
     }
    .submit_box{
      margin-bottom: 20px;
      .submit_btn{
        line-height: 20px;
        border-radius: 15px;
        font-size: 20px;
        text-align: center;
        letter-spacing: 5px;
        padding: 15px 175px;
        margin-top: 20px;
        display: block;
      }
    }
    a{
      color: #F2F6FC;
    }
  }
}

</style>
