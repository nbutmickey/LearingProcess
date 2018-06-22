<template>
<div>
  <myHeader></myHeader>
  <h2 v-text="dat.title"></h2>
  <p>作者：{{dat.author.loginname}}    发表于:{{$utils.changeTime(dat.create_at)}}</p>
  <hr>
  <article v-html="dat.content"></article>
  <h3>网友回复：</h3>
  <ul>
    <li v-for="li in dat.replies">
      <p>评论者：{{li.author.loginname}}  评论于：{{$utils.changeTime(li.create_at)}}</p>
      <article v-html="li.content"></article>
    </li>
  </ul>
  <myFooter></myFooter>
</div>
</template>

<script>
  import  myHeader from '../components/header'
  import myFooter from '../components/footer'
    export default {
        components:{
          myHeader,myFooter
        },
        data(){
          return {
            id:this.$route.params.id,
            dat:{}
          }
        },
      created(){
        this.getData();
      },
      methods:{
          getData(){
            this.$api.get('topic/'+this.id,null,r=>{
              this.dat=r.data;
            })
          }
      }
    }
</script>

<style scoped>

</style>
