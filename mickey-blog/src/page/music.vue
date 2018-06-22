<template>
  <transition name="slide_fade">
    <div>
      <myHeader></myHeader>
    </div>
  </transition>
</template>

<script>
  import myHeader from '../components/nav/index'
  export default {
    components:{myHeader}
  }
</script>

<style scoped>

</style>
