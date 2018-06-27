<template>
  <transition name="slide_fade">
    <div class="bg">
      <myHeader></myHeader>
      <div class="personal_main">
        <div class="personal_header">
          <div class="personal_bg">
            <p class="header_img"><img src="../assets/img/logo.jpg" style=""></p>
            <p class="user_name" style="text-align: center">{{username}}</p>
            <p class="user_note">心即理，知行合一，致良知</p>
          </div>
          <div>
            <el-tabs v-model="activeName" @tab-click="handleClick" >
              <el-tab-pane label="我的主页" name="first">
                <myPage></myPage>
              </el-tab-pane>
              <el-tab-pane label="我的收藏" name="second">
                <myCollection></myCollection>
              </el-tab-pane>
              <el-tab-pane label="我的心情" name="third">
                <myMood></myMood>
              </el-tab-pane>
            </el-tabs>
          </div>
        </div>
        <div class="personal_content"></div>
      </div>
    </div>
  </transition>
</template>

<script>
  import myHeader from '../components/nav/index'
  import myPage from '../components/personal/mypage'
  import myCollection from '../components/personal/mycollection'
  import myMood from '../components/personal/mymood'
  import {mapState}  from 'vuex'
  export default {
      name: "personal",
      components:{ myHeader,myPage,myCollection,myMood},
      data(){
        return {
          activeName:'first',
          username:''
        }
      },
      methods:{
        handleClick(tab,event){
        },
      },
      computed:{
        ...mapState(
          ['token']
        )
      },
      mounted(){
        if(this.token!=='') {
          this.$http.get('http://localhost:3000/user', {
            headers: {
              accesstoken: this.token
            }
          }).then((res) => {
            this.username = res.data.name;
          })
        }
        }
    }
</script>
<style>
  .el-tabs__nav {
    width: 100% !important;
    /*background: rgba(255,255,255,0.7);*/
  }

  .el-tabs__item {
    width: 33.3333% !important;
    text-align: center !important;
    letter-spacing: 2px;
    height: 50px;
    line-height: 50px;
    font-size: 18px;
    font-weight: bold;
    color: whitesmoke;
  }
  /*.el-tabs__item:hover{*/
    /*color: rgba(217,117,9,0.84);*/
  /*}*/
  /*.el-tabs__item.is-active{*/
    /*color: rgba(217,117,9,0.84);*/
  /*}*/
  .el-tabs__active-bar {
    border-bottom: 5px;
  }


</style>

<style scoped lang="scss">
  .bg{
    position: fixed;
    width: 100%;
    height: 100vh;
    background-image: url("../assets/img/bg_about.jpg") ;
    background-size: cover;
  }

  .personal_main{
    width: 1200px;
    margin:150px auto;
   .personal_header{
     .personal_bg{
       width: 100%;
       height: 280px;
       background-image: url("../assets/img/bg_personal_header.jpg");
       background-size: cover;
       .header_img{
         position: relative;
         top: -80px;
         left: 50%;
         margin-left: -65px;
         img{
           width: 130px;
           height: 130px;
           display: block;
           border-radius: 50%;
           border: 6px solid rgba(0,0,0,0.1);
         }
       }
       .user_name{
         margin-top: -40px;
         text-align: center;
         color: white;
         font-size: 45px;
         font-weight: bold;
       }
       .user_note{
         margin-top: 30px;
         text-align: center;
       }
     }
   }

  }

</style>
