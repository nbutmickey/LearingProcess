<template>
<!--Html代码必须包裹在div标签中-->
  <div>
  <Header></Header>
  <div class="article_list">
    <ul>
      <li v-for="li in list">
        <time v-text="$utils.changeTime(li.create_at)"></time>
        <router-link :to="/content/+li.id">{{li.title}}</router-link>
      </li>
    </ul>
  </div>
  <Footer></Footer>
</div>
</template>

<script>
  import Header from '../components/header'
  import Footer from '../components/footer'
  export default {
        components:{Header,Footer},
        data(){
          return {
            list:[]
          }
        },
        created(){
          this.getData();
        },
        methods:{
          getData(){
            this.$api.get('topics',null,r => {
              this.list=r.data;
            })
          }
        }
    }
</script>

<style scoped>
.article_list{
  margin: auto;
}
</style>
