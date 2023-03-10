import Vue from 'vue'
import App from './App.vue'
// 将三级联动注册为全局组件，因此不需要import
// tip:全局组件都放到components中
import TypeNav from "@/components/TypeNav";
// 第一个参数：全局组件的名字，第二个参数：哪一个组件
Vue.component(TypeNav.name, TypeNav)
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入swiper
// import "swiper/css/swiper.css"

new Vue({
    render: h => h(App),
    // 注册路由，KV一致省略V
    // 注册路由信息：组件实例会多两个属性$route,$router
    router,
    // 注册仓库：组件实例会多一个属性$store
    store
}).$mount('#app')
