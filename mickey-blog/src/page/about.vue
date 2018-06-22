<template>
    <div class="bg">
      <myHeader></myHeader>
    </div>
</template>

<script>
  import myHeader from '../components/nav/index'
  export default {
    components:{myHeader}
  }
</script>

<style scoped>
  .bg{
    position: fixed;
    width: 100%;
    height: 100vh;
    background-image: url("../assets/img/bg_about.jpg");
    background-size: cover;
  }


</style>
