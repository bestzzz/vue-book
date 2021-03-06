import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Home from '../components/Home.vue';
import List from '../components/List.vue';
import Collect from '../components/Collect.vue';
import Add from '../components/Add.vue';
import Detail from '../components/Detail.vue';

export default new Router({
  routes: [
    {path: '/', redirect: '/home'},
    {path: '/home', component: Home},
    {path: '/list', component: List},
    {path: '/collect', component: Collect},
    {path: '/add', component: Add},
    // /detail/1 {bid: 1} 路径参数 必须有但是可以随机
    {path: '/detail/:bid', component: Detail, name: 'detail'},
    {path: '*', redirect: '/home'},
  ]
})
