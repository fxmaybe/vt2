import Vue from 'vue'
import Router from 'vue-router'
import Header from '@/components/header'
import Nav from '@/components/nav'
import Detail from '@/components/detail'
import RouterTest from '@/components/routerTest'
import Footer from '@/components/footer'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      components: {
        modA: Header,
        modB: RouterTest,
        modD: Footer,
        modE: RouterTest

      }
    },
    {
      path: '/nav',
      redirect: '/nav/router-test',
      name: 'Nav',
      components: {
        modA: Nav
      },
      children: [
        { 
          path: '/nav/router-test',
          name: 'RouterTest',
          components: {
            modA: RouterTest,
            modB: Footer,
            modC: Header
          } 
        }
      ]
    }, 
    {
      path: '/detail/:id',
      components: {
        modC: Detail
      }
    }
  ]
})
