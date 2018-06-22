<template>
  <div id="app">
    <!--路由出口，项目所有内容都是基于这个视口来呈现-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  /*样式都将从src/style/style.scss这个文件来引入*/
@import "./style/style.scss";
</style>
