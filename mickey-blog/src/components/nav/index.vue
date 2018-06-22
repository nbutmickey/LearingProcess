<template>
      <div class="header">
        <div class="navWrap">
          <router-link :to="'/'">MICKEY'S BLOG</router-link>
        </div>
        <nav class="nav">
          <ul class="nav-list">
            <li><router-link :to="'/home'">HOME</router-link></li>
            <li><router-link :to="'/blog'">BLOG</router-link></li>
            <li><router-link :to="'/music'">MUSIC</router-link></li>
            <li><router-link :to="'/about'">ABOUT</router-link></li>
            <li v-if="token" ><router-link :to="'/personal'">Personal</router-link></li>
            <li v-else><router-link :to="'/SignIn'">SignIn</router-link></li>
          </ul>
        </nav>
      </div>

</template>

<script>
  import {mapState} from 'vuex'
    export default {
      computed:{
        ...mapState([
          'SignType',
          'token',
        ])
      }
    }
</script>

<style scoped lang="scss">

.header{
  position: fixed;
  width: 100%;
  height:60px;
  background: linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.5));
  padding: 0 20px;
  top:0;
  border-bottom: 1px solid rgba(255,255,255,0.5);
  transition: background 0.3s;
  .navWrap{
    float: left;
    width: 30%;
    font-family: "Federant",cursive !important;
    font-size: 25px;
    transition: all 0.3s;
    a{
      display: inline-block;
      padding: 10px 60px;
      color: red;
    }
  }

  .nav{
    float: left;
    width: 70%;
    transition: all 1s;
    .nav-list{
      list-style-type: none;
      li{
        float: left;
      }
      //导航激活样式
      .router-link-active{
        border-bottom: 3px solid red;
        background-color: rgba(0,0,0,0.5);
      }
      /*导航栏划过抖动动画*/
      @keyframes shake {
        0%,100%{
          transform: translateX(0);
        }
        10%, 30%, 50%, 70%, 90% {
          transform: translateX(-5px);
        }
        20%, 40%, 60%, 80% {
          transform: translateX(5px);
        }
      };
      a{
        font-size: 16px;
        text-align: center;
        vertical-align: middle;
        color: #ffff;
        display: inline-block;
        padding: 18px 60px;
        letter-spacing: 1px;
        &:hover{
          animation: shake 1s;
          border-bottom: 3px solid red;
          color: darkgoldenrod;
          background-color: rgba(0, 0, 0, .5);
        }
      }
    }
  }
}



</style>
