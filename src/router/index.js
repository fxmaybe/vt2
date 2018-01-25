import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Nav from '@/components/nav'
import Detail from '@/components/detail'
import Footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        modA: Header,
        modB: Nav,
        modD: Footer
      }
    },
    {
      path: '/nav',
      name: 'Nav',
      components: {
        modA: Nav
      }
    }, 
    {
      path: '/detail/:id',
      components: {
        modC: Detail
      }
    }
  ]
})
