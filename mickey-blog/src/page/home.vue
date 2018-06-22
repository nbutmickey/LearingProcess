<template>
  <transition name="slide_fade">
   <div class="bg">
     <myHeader></myHeader>
     <div class="land">
       <div class="content">
         <h1 class="title">Nothing Is Impossible</h1>
         <p class="subTitle">Life is a box of chocolate, you don't know what you are gonna get.</p>
         <router-link class="button" :to="'/blog'">Let's Go >></router-link>
       </div>
     </div>
   </div>
  </transition>
</template>

<script>
  import myHeader from '../components/nav/index'
    export default {
       components:{myHeader}
    }
</script>

<style scoped lang="scss">
.bg{
  position: fixed;
  width: 100%;
  height: 100vh;
  background-image: url("../assets/img/bg_home.jpg");
  background-size: cover;

  .land{
    background: rgba(0, 0, 0, .5);
    height: 100vh;
    .content{
      position: absolute;
      left: 70px;
      top: 210px;
      padding: 20px 50px;
      .title{
        color: #fff;
        font-size: 60px;
        letter-spacing: 2px;
      }

      @keyframes typing {
        from{width: 0;}
      }
      @keyframes caret {
        50%{border-color: transparent}
      }
      .subTitle{
        width: 700px;
        margin: 50px 0;
        color: white;
        font: 120% Consolas, Monaco, monospace;
        animation: typing 10s steps(60),
        caret 0.8s steps(3) infinite;
        white-space: nowrap; /*规定段落中的文本不进行换行*/
        border-right: 1px solid;
        overflow: hidden;
      }
      @keyframes myfirst
      {
        0%   {left:0;}
        25%  {left:50px;color: blueviolet}
        50%  {left:100px;color: darkgoldenrod}
        75%  {left:150px;color: darkgreen}
        100% {left:200px;color: white}
      }
      .button{
        display: inline-block;
        color: red;
        position: relative;
        font-size: 30px;
        border: 1px solid rgba(255,255,255,0.5);
        padding: 15px 25px;
        border-radius: 5px;
        text-align: center;
        letter-spacing: 2px;
        &:hover{
          background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5));
          border-color: red;
          color: white;
          animation:myfirst 2s linear  infinite ;
          -webkit-animation:myfirst 2s linear  infinite ;
        }
      }
    }
  }
}

</style>
