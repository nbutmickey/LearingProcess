import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/page/home'
import Blog from '@/page/blog'
import Music from '@/page/music'
import About from '@/page/about'
import SignIn from '@/page/signIn'
import Personal from '@/page/personal'
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path:'/blog',
      name:'Blog',
      component:Blog
    },
    {
      path:'/music',
      name:'Music',
      component:Music
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/signIn',
      name:'SignIn',
      component:SignIn
    },
    {
      path:'/personal',
      name:'Personal',
      component:Personal
    }
  ]
})
