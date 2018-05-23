<template>
  <div id="app">
    <h1>{{title}}</h1>
    <ul class="todos">
      <li> <input placeholder="接下去要做什么？" v-model="newTodo" @keyup.enter="addTodos" autofocus="true"></li>
      <li v-for="(todo,index) in filteredTodos" :class="{'checked':todo.done}">
        <input type="checkbox" v-model="todo.done" @change="saveTodos"><label>{{index+1}}.{{todo.value}}</label><time>{{todo.created|date}}</time><button @click="deleteTodos(todo)" class="destory">X</button>
      </li>
      <li><span>{{unFinishedTodoLength}} tasks left</span><div style="display: inline-block;margin-left: 190px"><span v-for="state in states" :class="[state,filter===state?'actived':'']" @click="toggleFilter(state)">{{state}}</span></div> <span @click="ClearAllCompleted">Clear All Completed</span></li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
  // import './assets/css/bootstrap.css'
  // import './assets/css/todos.css'
  import moment from 'moment'
  import 'moment/locale/zh-cn'
  moment.locale('zh-cn')
export default {

  name: 'App',
  data(){
    return {
      newTodo:'',
      title:'Mickey Todos',
      todos:[],
      states:['all','active','completed'],
      filter:'all'
    }
  },
  created(){
    if(this.is_initialzed) {
      this.todos = JSON.parse(localStorage.getItem('Vue-todos'))
    }
  },
  computed:{
    is_initialzed(){
      return localStorage.getItem('Vue-todos')!==null
    },
    filteredTodos(){
      if(this.filter==='all'){
        return this.todos;
      }
      const completed=this.filter==='completed';
      return this.todos.filter(todo => completed===todo.done)
    }
    ,
    unFinishedTodoLength(){
      return this.todos.filter(todo => !todo.done).length;
    }
  },
  filters:{
    // 使用过滤器对时间进行处理，对时间进行规范处理
    date(val){
      return moment(val).calendar()
    }
  },
  methods:{
    addTodos:function () {
      this.todos.push({
        value:this.newTodo,
        done:false,
        created:Date.now()
      });
      this.saveTodos()
      this.newTodo=''
    },
    deleteTodos:function (todo) {
      this.todos=this.todos.filter((x)=>x!==todo)
      this.saveTodos()
    },
    saveTodos:function () {
      localStorage.setItem('Vue-todos',JSON.stringify(this.todos))
    },
    toggleFilter:function (state) {
        this.filter=state;

    },
    ClearAllCompleted:function () {
      this.todos = this.todos.filter(todo => todo.done === false)
      this.saveTodos()
    }
  }
}
</script>

<style scoped>
    body{
      margin: 0;
      padding: 0;
    }
    body{
      font-size: 14px;
      font-family:'Helvetica Neue', Helvetica, Arial, sans-serif ;
      /*background: #f5f5f5;*/
      color: #4d4d4d;
      margin: 0 auto;
      -webkit-font-smoothing: antialiased;
      font-weight: 100;
      background: url("../src/assets/images/background-image.jpg");
      background-size: cover;
    }
    h1{
      width: 100%;
      font-size: 80px;
      font-weight: 100;
      text-align: center;
      color: rgba(175, 47, 47, 0.15);
    }

    ul li{
      list-style: none;
    }
    button, input {
      outline: none;
    }
    .todos{
      margin: 0 auto;
      width: 600px;
      padding: 0 20px;
      border: 1px solid #ccc;
      background: #fff;
      box-shadow: 0 10px 30px #ccc;
      position: relative;
      transition: .3s;
    }
    .todos>li{
      cursor: pointer;
      font-size: 24px;
      line-height: 36px;
      padding: 12px;
      border-bottom: 1px solid #ededed;
      position: relative;
    }

  .todos>li:first-child>input{

    font-size: 24px;
    border: none;
    width: 100%;
    padding: 10px;
    background: transparent;
  }
  .checked{
    text-decoration: line-through;
    color: #d9d9d9
  }
  .todos>li>input[type=checkbox]{
    vertical-align: middle;
    text-align: center;
    border: none;
    width: 40px;
    height: auto;
    position: relative;
    top: -22px;
    left: -24px;
    /*将按钮原有的属性消失掉*/
    -webkit-appearance: none;
    -moz-appearance: none;
  }
    .todos>li.checked>input[type=checkbox]:after{
      content: url('../src/assets/images/done.svg');
    }
    .todos>li>input[type=checkbox]:after{
      content: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="-10 -18 100 135"><circle cx="50" cy="50" r="50" fill="none" stroke="#ededed" stroke-width="3"/></svg>');
      position: absolute;
    }
  .todos>li>time{
    position: absolute;
    right: 60px;
    top: 15px;
    font-size: 10px;
  }
  .destory{
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 25px;
    color: #cc9a9a;
    width: 40px;
    height: 40px;
    background: transparent;
    -webkit-appearance: none;
    cursor: pointer;
    outline: none;
    border: none;
  }
    .todos>li:last-child span{
      font-size: 10px;
    }
    .todos>li:last-child>span:last-child{
      font-size: 10px;
      color: #3c763d;
      padding:4px 6px;
      border-radius: 3px;
      border: 1px solid #8c8c8c;
    }
    .todos>li:last-child div span{
      padding: 4px 6px;
      color: #545554;
      margin-right: 10px;
      border-radius: 3px;
    }
  .actived{
    border: 1px solid #ce8483;
  }
</style>
