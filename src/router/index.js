import { createRouter, createWebHistory } from 'vue-router'
import AddproductVue from '../components/Addproduct.vue'
import HomeVue from '../components/Home.vue'
import ProductsVue from '../components/Products.vue'
import EditVue from '../components/Edit.vue'
import SigninVue from '../components/Signin.vue'
import store from '../Store/store'
import XetaVue from '../components/Xeta.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
 {
  path:'/',
  name:'Home',
  component: HomeVue,
  beforeEnter: (to, from, next) => {
    if(store.getters.roootayollatokeni){
next()
    }
    else{
next('/sign')
    }
  }

 },
 {
  path:'/addproduct',
  name:'Addproduct',
  component: AddproductVue,
  beforeEnter: (to, from, next) => {
    if(store.getters.roootayollatokeni){
next()
    }
    else{
next('/sign')
    }
  }
 },
 {
  path:'/products',
  name:'Products',
  component: ProductsVue,
  beforeEnter: (to, from, next) => {
    if(store.getters.roootayollatokeni){
next()
    }
    else{
next('/sign')
    }
  }
 },
 {
  path:'/edit',
  name:'Edit',
  component: EditVue,
  beforeEnter: (to, from, next) => {
    if(store.getters.roootayollatokeni){
next()
    }
    else{
next('/sign')
    }
  }
 },
 {
  path:'/sign',
  name:'Sign',
  component: SigninVue,
  
 },
 {
  path:'/:caption',
  name:'Xeta',
  component: XetaVue,
 }
  ]
})

export default router
