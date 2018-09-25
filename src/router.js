import Vue from 'vue'
import Router from 'vue-router'
import Course from '@/components/course'
import Index from '@/components/index'
import Master from '@/components/master'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'active',
  // 路由配置
  routes: [
    {
      path: '/',
      component: Index
    }, {
      path: '/course',
      component: Course
    }{
      path: '/master',
      component: Master
    }
  ]
})
