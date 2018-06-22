<template>
  <div class="main">
    <div class="container">
      <div class="content">
        <ul>
          <li class="p1">
            <a href="#"><img src="/static/img/1.png" alt=""/></a>
          </li>
          <li class="p2">
            <a href="#"><img src="/static/img/2.png" alt=""/></a>
          </li>
          <li class="p3">
            <a href="#"><img src="/static/img/3.png" alt=""/></a>
          </li>
          <li class="p4">
            <a href="#"><img src="/static/img/4.png" alt=""/></a>
          </li>
          <li class="p5">
            <a href="#"><img src="/static/img/5.png" alt=""/></a>
          </li>
          <li class="p6">
            <a href="#"><img src="/static/img/6.png" alt=""/></a>
          </li>
          <li class="p7">
            <a href="#"><img src="/static/img/7.png" alt=""/></a>
          </li>
        </ul>
      </div>
      <a href="javascript:;" class="btn_left">
        <
      </a>
      <a href="javascript:;" class="btn_right">
        >
      </a>
      <div class="buttons clearfix">
        <a href="javascript:;" class="color"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
        <a href="javascript:;"></a>
      </div>

    </div>
  </div>
</template>

<script>
  import 'jquery/dist/jquery.min'
  import '../../../static/js/carousel.js'
  export default {
    name: 'index',
  }
</script>
<style scoped lang="scss">
  .main{
    width:100%;
    height: 320px;
    background-color: #212121;
    margin: 0 auto;
    position: relative;
    top:60px;
   }
  .container{
    width: 750px;
    height: 220px;
    margin: 0 auto;
    position: relative;
    top:40px;
    overflow: hidden;
   .content{
     position: absolute;
     width: 498px;
     height: 220px;
     top: 0;
     left: 50%;
     margin-left: -249px;
     li{
       position: absolute;
       top: 0;
       left: 0;
       width: 498px;
       height: 220px;
       transition: all 0.3s ease;
       img{
         width: 100%;
         height: 100%;
         vertical-align: middle;
         display: inline-block;
       }
     }

   }
    .buttons{
      width: 370px;
      height: 5px;
      line-height: 5px;
      position: absolute;
      bottom: 5px;
      left: 50%;
      margin-left: -185px;
      z-index: 80;
    }
    .buttons a {
      float: left;
      width: 40px;
      height: 5px;
      background-color: #898F94;
      margin-right: 15px;
    }
    .buttons a.color {
      background-color: #92ffff;
    }
    .buttons a:last-child {
      margin-right: 0;
    }
    .btn_left,.btn_right{
      display: none;
      width: 126px;
      height: 179px;
      position: absolute;
      top: 21px;
      z-index:50;
      color: #fff;
      font-size: 50px;
      line-height: 179px;
    }
    .btn_left{
      text-align: left;
      left: 0;
    }
    .btn_right{
      text-align: right;
      right: 0;
    }
    .p1 {
      transform: translate3d(-577px, 0, 0) scale(0.81);
      opacity: 0.4;
      z-index: 1;
    }

    .p2 {
      transform: translate3d(-325px, 0, 0) scale(0.81);
      transform-origin: 0 50%;
      opacity: 0.6;
      z-index: 2;
    }

    .p3 {
      transform: translate3d(-125px, 0, 0) scale(0.81);
      transform-origin: 0 50%;
      opacity: 0.9;
      z-index: 3;
    }

    .p4 {
      transform: translate3d(0px, 0, 0) scale(1);
      opacity: 1;
      z-index: 4;
    }

    .p5 {
      transform: translate3d(220px, 0, 0) scale(0.81);
      transform-origin: 0 50%;
      opacity: 0.9;
      z-index: 3;
    }

    .p6 {
      transform: translate3d(425px, 0, 0) scale(0.81);
      transform-origin: 0 50%;
      opacity: 0.6;
      z-index: 2;
    }

    .p7 {
      transform: translate3d(625px, 0, 0) scale(0.81);
      transform-origin: 0 50%;
      opacity: 0.4;
      z-index: 1;
    }
  }
</style>
