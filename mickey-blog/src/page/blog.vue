<template>
  <transition name="slide_fade">
    <div>
      <myHeader></myHeader>
      <div class="main_content">
        <div class="slide_bar">
          <div class="logo"><img src="../assets/img/logo.jpg" style="display: block;width: 180px;height: 180px;border-radius: 50%"/></div>
          <div class="name">米奇</div>
          <div class="sayings">多敲代码，少睡觉</div>
          <div class="site_state">
            <div class="site_state_item">
              <span>17</span>
              <span>日志</span>
            </div>
            <div class="site_state_item">
              <span>3</span>
              <span>分类</span>
            </div>
            <div class="site_state_item">
              <span>32</span>
              <span>标签</span>
            </div>
            <div class="link_to_author">
              <span style="width: 50%"><a href="https://github.com/nbutmickey">
                <img src="../assets/img/github.png" style="width: 32px;height: 32px"/>
                Github
              </a></span>
              <span style="width: 50%"><a href="#">
                <img src="../assets/img/wx.png" style="width: 30px;height: 30px"/>
                WeChat
              </a></span>
            </div>
          </div>
        </div>
        <div class="content_wrap">4234324</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import myHeader from '../components/nav'
  export default {
    components:{myHeader}
  }
</script>

<style scoped lang="scss">
  .main_content{
    width: 1240px;
    margin: 62px auto;
  }
.slide_bar{
  position: fixed;
  width: 300px;
  padding-bottom: 50px;
  float: left;
  margin-right: 30px;
  background: #fff;
  box-shadow: none;
  .logo{
    padding: 60px;
  }
  .name{
    text-align: center;
    letter-spacing: 2px;
    font-size: 30px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
    color:#303133 ;
  }
  .sayings{
    margin-top: 20px;
    text-align: center;
    font-size: 18px;
    font-family:'Lato';
    color:#999;
  }
  .site_state{
    font-family: Federant;
    font-size: 20px;
    margin-top:30px;
    text-align: center;
    div:nth-child(1){
      border-left: none;
    }
  .site_state_item{
    display: inline-block;
    padding: 0 20px;
    border-left: 1px solid #eee;
    span{
      display: block;
      font-size: 20px;
    }
    span:nth-child(1){
      font-weight: bold;
    }
    span:nth-child(2){
      margin-top: 5px;
      color:#999;
      font-size: 16px;
    }
  }
  .link_to_author{
    margin-top: 40px;
  }
  }
}
.content_wrap{
  width: 900px;
  height: 200vh;
  background:#fff ;
  float: right;
  padding: 40px;
  box-sizing: border-box;
  box-shadow: initial;
  border-radius: initial;
}

</style>
