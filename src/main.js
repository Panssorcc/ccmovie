import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import axios from 'axios'
Vue.prototype.axios=axios;

/* 全局过滤器 */
Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);
});

/* 全局组件 */
import Scroller from '@/components/Scroller'
Vue.component('Scroller' , Scroller);



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
